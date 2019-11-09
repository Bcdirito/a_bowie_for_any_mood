import React, { Component } from "react"

export default class Quiz extends Component {
    state = {
        questions: this.props.questions,
        albums: this.props.albums,
        questionNumber: 1
    }

    selectAnswer = (cb) => {
        console.log(this.props.albums.filter(cb))
    }

    generateAnswers = (answers) => {
        let answersArr = []

        for (const key in answers){
            answersArr.push(<div key={key} className="moodQuizAnswers" onClick={() => this.selectAnswer(answers[key])}>{key}</div>)
        }

        return answersArr
    }
    
    render() {
        const currentQuestion = this.state.questions[this.state.questionNumber]
        return (
            <div className="moodQuiz">
                <h1>Albums Quiz</h1>
                <h2>{currentQuestion.question}</h2>
                <div className="choices">
                    {this.generateAnswers(currentQuestion.answers)}
                </div>
            </div>
        )
    }
}