import React, { Component } from 'react'
import QuizPicker from "./QuizPicker"
import Quiz from "./Quiz"

import studioAlbums from "../db/studio"
import studioQuestions from "../db/studioQuestions"
import liveAlbums from "../db/live"
import liveQuestions from "../db/liveQuestions"

export default class QuizContainer extends Component {
    state = {
        quizType: ""
    }

    renderQuiz = () => {
        if (this.state.quizType === "studio") return <Quiz albums={studioAlbums} questions={studioQuestions} />
        else return <Quiz albums={liveAlbums} questions={liveQuestions} />
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
