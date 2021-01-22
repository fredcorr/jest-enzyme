import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
    
    return (
        <div data-test="component-guessed-words">
            { props.guessedWords.length === 0 ?
                <p data-test="guessed-words-instructions">Try to guess the secret word!</p>
              : 
                <div data-test="guessed-words-table">
                    {
                        props.guessedWords.map( 
                            word => <div data-test='guessed-word' key="word.guessedWord">
                                <span>{ word.guessedWord }</span>
                                <span>{ word.letterMatchCount }</span>
                            </div>
                        )
                    }
                </div>
            }
        </div>
    )
}

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired
}

export default GuessedWords;
