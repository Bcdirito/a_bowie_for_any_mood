const express = require("express")
const axios = require("axios")

const clientId = process.env.REACT_APP_CLIENT_ID
const clientSecret  = process.env.REACT_APP_CLIENT_SECRET

const port = process.env.PORT || 8000

const app = express()


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})