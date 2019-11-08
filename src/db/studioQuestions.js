const studioQuestions = {
    1: {
        question: "How Weird are You Willing to Get Right Now?",
        answers: {
            "Please Give Something Normal": (x) => { return x.conceptRank <= 1 },
            "A Little Quirk Never Hurt No One": (x) => { return x.conceptRank <= 2},
            "I Like a Balance of Abstract & Normal": (x) => { return x.conceptRank <= 3},
            "If I Had to Choose between a Dog or Cat, I'd Choose a Platypus": (x) => { return x.conceptRank <= 4 },
            "I am an Alien and Have Yet to Arrive on Earth": (x) => { return x.conceptRank <= 5 }
        }
    },
    2: {
        question: "When You put on Red Shoes:",
        answers: {
            "I Go out Dancing": (x) => { return x.danceTracks === true},
            "They're My Fuzzy Slippers": (x) => { return x.danceTracks === false}
        }
    },
    3: {
        question: "A Song with No Words Is:",
        answers: {
            "Not My Vibe": (x) => { return x.instrumentalTracks === false},
            "Just as Good as One with Words": (x) => { return x.instrumentalTracks === true}
        }
    }
}

export default studioQuestions