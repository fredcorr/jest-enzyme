import React, { Component } from 'react';
import GuessedWords from './guessedWords';
import Input from './input';
import Congrats from './congrats';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={ true } />
        <Input />
        <GuessedWords guessedWords={[
          { guessedWord: 'train', letterMatchCount: 3 }
        ]} />
      </div>
    )
  }

}

export default App;
