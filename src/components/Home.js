import React from 'react'
import "../stylesheets/home.css"
import {Link} from "react-router-dom"

const Home = (props) => {
    return (
        <div className="homeContent">
            <h1>David Bowie Mood Quiz</h1>
            <Link to="/quiz"><button>Take the Quiz</button></Link>
            <Link to="/about"><button>About Us</button></Link>
            <footer>Wham Bam Thank You Ma'am</footer>
        </div>
    )
}

export default Home
