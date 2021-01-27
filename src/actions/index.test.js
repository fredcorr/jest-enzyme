import { storeFactory } from '../../test/testUtils';
import { getSecretWord } from './';
import moxios from 'moxios'

describe( 'getSecretWord action creator', () => {

    beforeEach(() => {
        moxios.install();
    })

    afterEach(() => {
        moxios.uninstall();  
    })

    test( 'adds response to word to state', () => {

        const secretWord = 'party';
        const store = storeFactory();

        // looks at the most recent request and mocks it
        moxios.wait( () => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: secretWord
            });
        });

        // this all dispatch waits for the promise by the action to be completed
        return store.dispatch( getSecretWord() ).then( () => {

            const newState = store.getState();
            expect( newState.secretWord ).toBe( secretWord )

        });

    });

});