const liveQuestions = {
    1: {
        question: "Would You Rather?",
        answers: {
            "Run a 100 Meter Dash?": (x) => {return x.length <= 5551}, 
            "Run a Marathon": (x) => {return x.length >= 5551}
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