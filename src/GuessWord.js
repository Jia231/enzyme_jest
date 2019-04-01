import React from 'react'
import propTypes from 'prop-types';

const GuessWord = (props) => {
    let content;
    if (props.guessedWords.length === 0) {
        content = (
            <span data-test="component-instructions">
                Try to guess the secret word!
            </span>
        )
    }
    return (
        <div data-test="component-guessed-words">
            {content}
        </div>
    )
}

GuessWord.propTypes = {
    guessedWords: propTypes.arrayOf(
        propTypes.shape({
            guessedWord: propTypes.string.isRequired,
            letterMatchCount: propTypes.number.isRequired
        })
    ).isRequired

}

export default GuessWord
