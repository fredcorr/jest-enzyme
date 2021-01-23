import { combineReducers } from 'redux';
import success from './successReducer';
import { guessedWords } from './guessWordsReducer';
import secretWord from './secretWordReducer';

const reducer = combineReducers({
    success,
    guessedWords,
    secretWord
})

export default reducer;