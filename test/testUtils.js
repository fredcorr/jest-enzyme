import checkPropType from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../src/reducers';
import { middlewares } from '../src/configureStore'


/**
 * Returns node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search
 * @return {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val ) => {
    return wrapper.find(`[data-test="${ val }"]`)
}


/**
 * @function checkProps - used to test prop type validation
 * @param {JSX} components - Component reference
 * @param {object} conformingProps - expetced props to check against 
 * @returns 
 */
export const checkProps = ( components, conformingProps ) => {
    
    const propError = checkPropType( 
        components.propTypes, 
        conformingProps,
        'prop', 
        components.name
    )

    expect( propError ).toBeUndefined()  
}

/**
 * @function storeFactory
 * @param {object} initialState 
 * @returns {Store} - new store for test
 */
export const storeFactory = (initialState) => {

    const createStoreWithMiddleware = applyMiddleware( ...middlewares )( createStore )
    return createStoreWithMiddleware(reducer, initialState)
}

