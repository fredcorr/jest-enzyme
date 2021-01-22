import GuessedWords from './guessedWords';
import { findByTestAttr, checkProps } from '../test/testUtils';
import { shallow } from 'enzyme';
import React from 'react';

const defaultProps = { 
    guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
}

/**
 * Factory function to create a ShallowWraper for the GuessedWords component
 * @function setup
 * @param {object} props 
 * @returns { ShallowWrapper }
 */

const setup = ( props = {} ) => {

    const setUpProps = { ...defaultProps, ...props }
    return shallow( <GuessedWords { ...setUpProps } /> )

}

test( 'does not throw warning with expected props', () => {
    checkProps( GuessedWords, defaultProps )    
} )


describe('if there are no words guessed', () => {

    let wrapper

    beforeEach(() => {
        wrapper =  setup({ guessedWords: []});
    })

    test( 'renders without errors', () => {

        expect(
            findByTestAttr( wrapper, 'component-guessed-words' ).length
        ).toBe(1)
        
    } )

    test('renders instruction', () => {
        expect(
            findByTestAttr( wrapper, 'guessed-words-instructions' ).text().length
        ).not.toBe(0)
    })

} ) 

describe('if there are words guessed', () => {

    const guessedWords = [
        { guessedWord: 'train', letterMatchCount: 1 },
        { guessedWord: 'purple', letterMatchCount: 2 }
    ]
    let wrapper

    beforeEach(() => {
        wrapper = setup({ guessedWords });  
    })

    test( 'renders without errors', () => {

        expect(
            findByTestAttr( wrapper, 'component-guessed-words' ).length
        ).toBe(1)

    })

    test( 'renders "guessed words" section', () => {

        expect(
            findByTestAttr( wrapper, 'guessed-words-table' ).length
        ).toBe(1)

    })

    test( 'renders the correct number of guessed words', () => {

        expect(
            findByTestAttr( wrapper, 'guessed-word' ).length
        ).toBe( guessedWords.length )

    })

} )
