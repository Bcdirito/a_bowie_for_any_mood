import React, { Component } from "react"

export default class Quiz extends Component {
    state = {
        questions: this.props.questions,
        albums: this.props.albums,
        questionNumber: 1
    }
    
    render() {
        console.log(this.state)
        return (
            <div>Albums Quiz</div>
        )
    }
}