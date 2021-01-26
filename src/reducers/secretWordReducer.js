import { actionTypes } from '../actions';

/**
 * @function secretWordReducer
 * @param {string} state - State before reducer
 * @param {null} action - Action sent to reducer
 * @return {string} - New state ( secret word payload from action )
 */

const secretWord = ( state=null, action ) => {

    switch (action.type) {
        case actionTypes.SET_SECRET_WORD:
            return action.payload;
        default:
            return state
    }
}

export default secretWord