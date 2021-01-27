import { render, screen } from '@testing-library/react';
import { storeFactory, findByTestAttr } from '../test/testUtils';
import { shallow } from 'enzyme';
import App from './App';

const setup = (initialState={}) => {
    const store = storeFactory( initialState );
    return shallow( <App store={ store } />).dive().dive();
}

test( 'renders without errors', () => {

    const wrapper = setup()
    expect(
        findByTestAttr( wrapper, 'app-component' ).length
    ).toBe(1)

})

describe('renders app component with correct pieces of state', () => {

    test('gets success piece of state', () => {
        const success = false;
        const wrapper = setup( { success } )
        const successProp = wrapper.instance().props.success;
        expect( successProp ).toBe( success )
    })

    test( 'gets guessedWords piece of state', () => {

        const guessedWords = [];
        const wrapper = setup( { guessedWords } )
        const guessedWordsProp = wrapper.instance().props.guessedWords;
        expect( guessedWordsProp ).toBe( guessedWords )
    })

    test( 'gets secretWord piece of state', () => {

        const secretWord = [];
        const wrapper = setup( { secretWord } )
        const secretWordProp = wrapper.instance().props.secretWord;
        expect( secretWordProp ).toBe( secretWord )
    })

    test( 'gets getSecretWord action creator', () => {

        const wrapper = setup()
        const getSecretWordProp = wrapper.instance().props.getSecretWord;
        expect( getSecretWordProp ).toBeInstanceOf( Function )
    })

});
