import successReducer from './successReducer';
import { actionTypes } from '../actions/';

test( 'returns default initial state of false', () => {
    const newState = successReducer(undefined, {})
    expect( newState ).toBe(false)
})

test( 'returns state of true upon receiving an action of type `CORRECT_GUESS`', () => {
    const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESSS })
    expect( newState ).toBe(true)
})