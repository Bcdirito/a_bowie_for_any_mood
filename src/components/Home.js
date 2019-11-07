import React from 'react'
import "../stylesheets/home.css"
import {Link} from "react-router-dom"
import homeBowie from "../media/images/home_page_bowie.jpg"

const Home = (props) => {
    return (
        <div className="homeContent">
            <h1>David Bowie Mood Quiz</h1>
            <div className="homeBowieImg">
                <img src={homeBowie} alt="aladdinSane"/>
            </div>
            <Link to="/quiz"><button>Take the Quiz</button></Link>
            <Link to="/about"><button>About Us</button></Link>
        </div>
    )
}

export default Home
