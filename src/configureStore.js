import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from './reducers/'

export const middlewares = [ReduxThunk]

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore(reducer))

export default createStoreWithMiddleware