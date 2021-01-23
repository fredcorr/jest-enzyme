import { getLetterMatchCount } from '../helpers'

export const actionTypes = {
  CORRECT_GUESSS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD'
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