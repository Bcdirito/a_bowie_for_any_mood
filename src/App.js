import React from 'react';
import {Switch, Route} from "react-router-dom"
import './App.css';
import Home from "./components/Home"
import QuizContainer from "./components/QuizContainer"
import About from "./components/About"
function App() {
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
    </div>
  );
}

export default App;
