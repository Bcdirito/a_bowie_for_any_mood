import React from 'react';
import {Switch, Route} from "react-router-dom"
import './App.css';
import Home from "./components/Home"
import QuizContainer from "./components/QuizContainer"
import About from "./components/About"
import easterEgg from "./media/music/suffragette_city.mp3"

function App() {
  let music;

  const playMusic = () => {
    if (music !== undefined) music.pause()
    music = new Audio(easterEgg)
    music.play()
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => (
          <Home {...props} />
        )}/>
        <Route exact path="/about" render={(props) => (
          <About />
        )}/>
        <Route exact path="/quiz" render={(props) => (
          <QuizContainer />
        )}/>
        <Route component={Home} />
      </Switch>
      <footer onClick={() => playMusic()}>Wham Bam Thank You Ma'am</footer>
    </div>
  );
}

export default App;
