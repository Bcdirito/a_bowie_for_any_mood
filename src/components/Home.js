import React from 'react'
import "../stylesheets/home.css"
import {Link} from "react-router-dom"
import homeBowie from "../media/images/home_page_bowie.jpg"
import hopefulEgg from "../media/music/rock_n_roll_suicide.mp3"

const Home = (props) => {
    let audio;

    const playHope = () => {
        if (audio !== undefined) audio.pause()
        audio = new Audio(hopefulEgg)
        audio.play()
    }

    return (
        <div className="homeContent">
            <h1>David Bowie Mood Quiz</h1>
            <div className="homeBowieImg">
                <img src={homeBowie} alt="aladdinSane"/>
            </div>
            <Link to="/quiz"><div className="divButton">Take the Quiz</div></Link>
            <Link to="/about"><div className="divButton">About Us</div></Link>
            <div className="divButton" onClick={() => playHope()}>I'm Having a Really Tough Day</div>
        </div>
    )
}

export default Home
