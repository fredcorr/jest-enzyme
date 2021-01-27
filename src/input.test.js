import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './input';
import { guessWord } from './actions';

/**
 * Factory function to create a ShallowWraper for the Congrats component
 * @function setup
 * @param {object} props 
 * @returns { ShallowWrapper }
 */
const setup = ( initialState={} ) => {
    const store = storeFactory( initialState )
    return shallow(<Input store={ store }/>).dive().dive()
}

describe( 'render', () => {

    describe('word has not been guessed', () => {

        let wrapper
        beforeEach( () => {
            wrapper = setup({success: false})
        })

        test('renders component with no errors', () => {
            expect(
                findByTestAttr( wrapper, 'input-component' ).length
            ).toBe(1)
        })

        test('renders input box', () => {
            expect(
                findByTestAttr( wrapper, 'input-box' ).length
            ).toBe(1)
        })

        test('renders submit submit', () => {
            expect(
                findByTestAttr( wrapper, 'submit-button' ).length
            ).toBe(1)
        })

    })

    describe( 'word has been guessed', () => {

        let wrapper
        beforeEach( () => {
            wrapper = setup({ success: true })
        })

        test('does not render component with no errors', () => {
            expect(
                findByTestAttr( wrapper, 'input-component' ).length
            ).toBe(0)
        })

        test('does not render input box', () => {
            expect(
                findByTestAttr( wrapper, 'input-box' ).length
            ).toBe(0)
        })

        test('does not render submit button', () => {
            expect(
                findByTestAttr( wrapper, 'submit-button' ).length
            ).toBe(0)
        })

    })

})

describe( 'redux props', () => {

    test( 'as success piece of state as prop', () => {

        const success = true;
        const wrapper = setup({ success });

        const successProp = wrapper.instance().props.success;
        expect( success ).toBe( successProp )

    })

    test( '`guessWord` action creator is a function prop', () => {

        const wrapper = setup();
        const guessWordProp = wrapper.instance().props.guessWord;
        expect( guessWordProp ).toBeInstanceOf( Function );

    })

} )