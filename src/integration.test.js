import { storeFactory } from '../test/testUtils';
import { guessWord } from './actions';

describe( 'guessWord action dispatcher', () => {

    const secretWord = 'party';
    const unsucessfulWord = 'train'

    describe( 'no guess words', () => {

        let store;
        const initialState = { secretWord }
        
        beforeEach( () => {

            store = storeFactory( initialState )

        })

        test( 'updates state correctly for unsucessful guess', () => {

            store.dispatch( guessWord( unsucessfulWord ) )
            const newState = store.getState()
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [{
                    guessedWord: unsucessfulWord, letterMatchCount: 3
                }]
            }
            expect( newState ).toEqual(expectedState)
            
        })

        test( 'updates state correctly for sucessful guess', () => {
            store.dispatch( guessWord( secretWord ) )
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: true,
                guessedWords: [{
                    guessedWord: secretWord, letterMatchCount: 5
                }]
            }

            expect( newState ).toEqual( expectedState )
        })

    } )

    describe( 'some guess words', () => {

        const guessedWords = [
            { guessedWord: 'agile', letterMatchCount: 1 }
        ]
        const initialState = { secretWord, guessedWords }
        let store

        beforeEach( () => {

            store = storeFactory( initialState )

        })


        test( 'updates state correctly for unsucessful guess', () => {

            store.dispatch( guessWord(unsucessfulWord) )
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [
                    ...guessedWords,
                    { guessedWord: unsucessfulWord, letterMatchCount: 3 }
                ]
            }
            expect( newState ).toEqual( expectedState )
        })

        test( 'updates state correctly for sucessful guess', () => {
            
            store.dispatch( guessWord(secretWord) )
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: true,
                guessedWords: [
                    ...guessedWords,
                    { guessedWord: secretWord, letterMatchCount: 5 }
                ]
            }
            expect( newState ).toEqual( expectedState )

        })

    } )

})