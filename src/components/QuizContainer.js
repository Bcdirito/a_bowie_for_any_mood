import React, { Component } from 'react'
import QuizPicker from "./QuizPicker"
import Quiz from "./Quiz"
import AlbumChoice from "./AlbumChoice"
import studioAlbums from "../db/studio"
import studioQuestions from "../db/studioQuestions"
import liveAlbums from "../db/live"
import liveQuestions from "../db/liveQuestions"
import "../stylesheets/quizContainer.css"

export default class QuizContainer extends Component {
    state = {
        componentType: ""
    }

    renderComponent = () => {
        if (this.state.componentType === "studio") return <Quiz componentPick={(name => this.componentPick(name))} albums={studioAlbums} questions={studioQuestions} />
        else if (this.state.componentType === "live" ) return <Quiz componentPick={(name => this.componentPick(name))} albums={liveAlbums} questions={liveQuestions} />
        else if (typeof this.state.componentType === "object" ) return <AlbumChoice albumArt={this.state.componentType.genre ? require.context("../media/images/studioAlbums", true) : require.context("../media/images/liveAlbums", true)} data={this.state.componentType} resetComponent={() => this.componentPick()}/>
    }

    componentPick = (name="") => {
        this.setState({
            componentType: name
        })
    }

    render() {
        return (
            <div>
              {this.state.componentType !== "" ? this.renderComponent() : <QuizPicker componentPick={(name) => this.componentPick(name)}/>}
              {this.state.componentType !== "" ? <div className="divButton restartButton" onClick={() => this.componentPick()}>Restart Quiz</div> : null}
            </div>
        )
    }
}
