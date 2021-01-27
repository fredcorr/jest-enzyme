import React, { Component } from 'react';
import GuessedWords from './guessedWords';
import { getSecretWord } from './actions'
import { connect } from 'react-redux';
import Input from './input';
import Congrats from './congrats';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="container" data-test="app-component">
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

const mapStateToProps = ( { success, secretWord, guessedWords } ) => {
  return {
    success,
    secretWord,
    guessedWords
  }
}

export default connect(mapStateToProps, { getSecretWord })(App);
