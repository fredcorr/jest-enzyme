import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
    
    return (
        <div data-test="component-guessed-words">
            { props.guessedWords.length === 0 ?
                <p data-test="guessed-words-instructions">Try to guess the secret word!</p>
              : 
                <div data-test="guessed-words-table">
                    <h3>Guessed Words</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Guess</th>
                            </tr>
                            <tr>
                                <th>Matching letters</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.guessedWords.map( 
                                    word => <tr data-test='guessed-word' key="word.guessedWord">
                                        <td>{ word.guessedWord }</td>
                                        <td>{ word.letterMatchCount }</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
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
