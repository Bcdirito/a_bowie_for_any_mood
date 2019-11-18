import React from "react"
import {Link} from "react-router-dom"
import "../stylesheets/about.css"
import aboutUsPhoto from "../media/images/about_us.jpg"

const About = (props) => {
    return (
        <div>
            <div className="aboutUsPage">
                <img className="aboutUsPhoto" src={aboutUsPhoto} alt="About Us"/>
                <h1>About the Project</h1>
                <div className="aboutUsText">
                    <p>This project was created by a fan of one of the greatest artists of all time: David Bowie. It was meant to spread not only a love of his music, but accessibility and knowledge of an incredibly deep body of work.</p>

                    <p>Whether you know his entire catalogue or have never heard a single song in your life, this quiz project will expose you to something you'll like and something you're in the mood for.</p>

                    <p>May the Starman live forever in all of our hearts.</p>
                </div>
            </div>
            <div className="aboutUsButtons">
                <Link to="/quiz"><div className="divButton">Take the Quiz</div></Link>
                <Link to="/about"><div className="divButton">About Us</div></Link>
            </div>
        </div>
    )
}

export default About