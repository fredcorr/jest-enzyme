import React from 'react';
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from '../test/testUtils';

import Congrats from './congrats';

const defaultProps = { success: false }


/**
 * @function setup
 * @param {object} props 
 * @returns { ShallowWrapper }
 */
const setup = ( props = {} ) => {

    const setUpProps = { ...defaultProps, ...props }
    return shallow( <Congrats { ...setUpProps } /> )

}



test( 'renders wihout erros', () => {

    const wrapper = setup({ success: false })
    expect( 
        findByTestAttr( wrapper, 'congrats-pannel' ).length
    ).toBe(1)
    
} )



test( 'renders no text when `success` prop is false', () => {

    const wrapper = setup({ success: false })
    const message = findByTestAttr( wrapper, 'congrats-pannel' ).text()
    expect( message).toBe('')

})



test( 'renders non-empty congrats message when `success` prop is true', () => {
    
    const wrapper = setup({ success: true })
    const message = findByTestAttr( wrapper, 'congrats-message' ).text()
    expect( message.length ).not.toBe(0)

})

test( 'does not throw warning with expected props', () => {
    const expectedProps = { success: false }
    checkProps( Congrats, expectedProps ) 
})