import React, { Component } from 'react';
import GuessedWords from './guessedWords';
import Congrats from './congrats';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={ true } />
        <GuessedWords guessedWords={[
          { guessedWord: 'train', letterMatchCount: 3 }
        ]} />
      </div>
    )
  }

}

export default App;
