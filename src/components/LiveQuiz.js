import React from "react"
import liveAlbums from "../db/live.js"

const shuffler = require("../utils/shuffler")
const lengthChecker = require("../utils/lengthChecker")

const LiveQuiz = (props) => {
    console.log(shuffler, lengthChecker)

    return (
        <div>Live Albums Quiz</div>
    )
}

export default LiveQuiz