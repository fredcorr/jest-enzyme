import { actionTypes } from "../actions";

/**
 * @function successReducer
 * @param {Array} state - Array of guessed words
 * @param {object} action - Action to reduce
 * @returns {boolean} - new success state
 */
const success = ( state = false, action ) => {
    switch (action.type) {
        case actionTypes.CORRECT_GUESSS:
            return true    
        default:
            return state
    }
}

export default success;