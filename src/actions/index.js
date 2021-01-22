export const actionTypes = {
  CORRECT_GUESSS: 'CORRECT_GUESS',  
}

/**
 * @function correctGuess
 * @return {object} - Action object with type `CORRECT_GUESS`
 */
export const correctGuess = () => {
    return {
        type: actionTypes.CORRECT_GUESSS
    }
}