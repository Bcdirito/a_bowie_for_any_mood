import React, { Component } from 'react'
import QuizPicker from "./QuizPicker"
import StudioQuiz from "./StudioQuiz"
import LiveQuiz from "./LiveQuiz"

export default class QuizContainer extends Component {
    state = {
        quizType: ""
    }

    renderQuiz = () => {
        if (this.state.quizType === "studio") return <StudioQuiz />
        else return <LiveQuiz />
    }

    quizPick = (name) => {
        this.setState({
            quizType: name
        })
    }

    render() {
        return (
            <div>
              {this.state.quizType !== "" ? this.renderQuiz() : <QuizPicker quizPick={(name) => this.quizPick(name)}/>}
            </div>
        )
    }
}
