import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { findByTestAttr } from '../test/testUtils';

import Congrats from './congrats';

Enzyme.configure({ adapter: new Adapter() })


/**
 * @function setup
 * @param {object} props 
 * @returns { ShallowWrapper }
 */
const setup = ( props = {} ) => shallow( <Congrats { ...props } /> )



test( 'renders wihout erros', () => {

    const wrapper = setup()
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