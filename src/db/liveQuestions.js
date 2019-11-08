const liveQuestions = {
    1: {
        question: "Would You Rather?",
        answers: {
            "Run a 100 Meter Dash?": (a, b) => {return a - b}, 
            "Run a Marathon": (a, b) => {return b - a}
        }
    }, 
    2: {
        question: "If Your Friend Asked You to go Dancing, You'd Say:",
        answers: {
            "Point Me to the Dance Floor": (x) => { return x.danceTracks === true},
            "My Two Left Feet Will Be up on the Couch": (x) => {return x.danceTracks === false} 
        }
    }
}

export default liveQuestions