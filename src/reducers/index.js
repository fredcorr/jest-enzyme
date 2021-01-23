import { combineReducers } from 'redux';
import success from './successReducer';
import { guessWordReducer } from './guessWordsReducer'

const reducer = combineReducers({
    success,
    guessWordReducer
})

export default reducer;