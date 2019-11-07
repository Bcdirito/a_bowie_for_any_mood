import React from "react"
import liveAlbums from "../db/live.js"

const LiveQuiz = (props) => {

    for (const key in liveAlbums) {
        console.log(key)
    }

    return (
        <div>Live Albums Quiz</div>
    )
}

export default LiveQuiz