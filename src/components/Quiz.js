import React, { Component } from "react"

export default class Quiz extends Component {
    state = {
        questions: this.props.questions,
        albums: this.props.albums,
        questionNumber: 1
    }

    filterAlbum = (cb) => {
        let newAlbumArr = this.state.albums.filter(cb)

        if (newAlbumArr.length > 0)  return newAlbumArr
        else return this.state.albums
    }

    questionNumberChecker = () => {
        return this.state.questionNumber < Object.keys(this.state.questions).length  ? this.state.questionNumber + 1 : this.props.componentPick(this.state.albums[0])
    }

    selectAnswer = (cb) => {
        this.setState({
            ...this.state,
            albums: this.filterAlbum(cb),
            questionNumber: this.questionNumberChecker()
        })
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