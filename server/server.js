const express = require("express")
const app = express()
const path = require("path")

const port = process.env.PORT || 8000

const cors = require("cors")
const querystring = require("querystring")
const cookieParser = require("cookie-parser")
const dotenv = require("dotenv").config()
const request = require("request")

const generateRandomString = require("./utils/generateRandomString")

const publicPath = path.join(__dirname, "../public")
const buildPath = path.join(__dirname, "../build")

const client_id = process.env.REACT_APP_CLIENT_ID
const client_secret = process.env.REACT_APP_CLIENT_SECRET
const redirect_uri = process.env.REACT_APP_REDIRECT_URI

const stateKey = "spotify_auth_state"

app.use(express.static(path.join(publicPath)))
    .use(express.static(path.join(buildPath)))
    .use(cors())
    .use(cookieParser())

app.listen(port, () => {
    console.log(`Listening on Port ${port}`)
})

app.get("/home", (req, res, next) => {
    res.sendFile(path.join(buildPath, "index.html"))
});

app.get("/login", (req, res) => {
    const state = generateRandomString(16)
    
    res.cookie(stateKey, state)

    const scope = "streaming user-read-email user-read-private"

    res.redirect('https://accounts.spotify.com/authorize?' + 
        querystring.stringify({
            response_type: "code",
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: state
        })
    )
})

app.get("/callback", (req, res) => {
    const code = req.query.code || null
    const state = req.query.state || null
    const storedState = req.cookies ? req.cookies[stateKey] : null
    
    if (state === null || state !== storedState) {
        res.redirect("/#" + 
            querystring.stringify({
                error: "state_mismatch"
            })
        )
    } else {
        res.clearCookie(stateKey)
        const authOptions = {
            url: "https://accounts.spotify/com/api/token",
            form: {
                code: code,
                redirect_uri: redirect_uri,
                grant_type: "authorization_code"
            },
            headers: {
                "Authorization": 'Basic' + (Buffer.from(client_id + ':' + client_secret).toString("base64"))
            },
            json: true
        }
        
        request.post(authOptions, (error, response, body) => {         
            if (body && response.code === 200) {
                const { refresh_token } = body
                res.redirect(`${req.headers.referer}?` + querystring.stringify({
                    refresh_token
                }))
            } else {
                console.log(req.headers)
                res.redirect(`${req.headers.referer}` + querystring.stringify({
                    error: 'invalid_token'
                }))
            }
        })
    }
})

app.get("/refresh_token", (req, res) => {
    const refresh_token = req.query.refresh_token
    const authOptions = {
        url: "https://accounts.spotify.com/api/token",
        headers: {
            "Authorization": "Basic" + (Buffer.from(client_id + ":" + client_secret).toString("base64"))
        },
        form: {
            grant_type: "refresh_token",
            refresh_token: refresh_token
        },
        json: true
    }

    request.post(authOptions, (error, response, body) => {
        if (!error && response.statusCode === 200){
            const access_token = body.access_token
            res.send({
                "access_token": access_token
            })
        } else {
            res.send({error: error})
        }
    })
})