import { getLetterMatchCount } from '../helpers';
import axios from 'axios';

export const actionTypes = {
  CORRECT_GUESSS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD'
}

/**
 * @function guessWord
 * @params {string} - Guessed Word
 * @return {Function} - Redux Thunk function
 */
export const guessWord = ( guessedWord ) => {
    return (dispatch, getState) => {
      const secretWord = getState().secretWord;
      const letterMatchCount = getLetterMatchCount( guessedWord, secretWord )
      dispatch({
        type: actionTypes.GUESS_WORD,
        payload: { guessedWord, letterMatchCount }
      })

      if( guessedWord === secretWord ) {
        dispatch({
          type: actionTypes.CORRECT_GUESSS
        })
      }
    }
}

export const getSecretWord = () => {
  return (dispatch ) => {
    // returns promise from axios.get. even if 'then' is appended this dispatch method will return a promise
    return axios.get( 'http://localhost:3030' ).then( response => {
      dispatch({
        type: actionTypes.SET_SECRET_WORD,
        payload: response.data
      })
    })
  }
}