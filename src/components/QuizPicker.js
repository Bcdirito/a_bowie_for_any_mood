import React from "react"
import studioBowie from "../media/images/studio_bowie.jpg"
import liveBowie from "../media/images/live_bowie.jpg"
import "../stylesheets/quizPicker.css"

const QuizPicker = (props) => {
    return (
        <div className="quizPicker">
            <h1>Which Photo Speaks to You?</h1>
            <div className="quizSelections">
                <img className="quizImage" src={studioBowie} alt="loungeBowie" name="studio" onClick={(e)=> props.componentPick(e.target.name)} />
                <img className="quizImage" src={liveBowie} alt="guitarBowie" name="live" onClick={(e) => props.componentPick(e.target.name)} />
            </div>
        </div>
    )
}

export default QuizPicker