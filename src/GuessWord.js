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
    } else {
        const guessedWordRow = props.guessedWords.map(
            (word, index) => (
                <tr data-test="guessed-word" key={index}>
                    <td>{word.guessedWord}</td>
                    <td>{word.letterMatchCount}</td>
                </tr>
            )
        )
        content = (
            <div data-test="guessed-words">
                <h3>Guessed Words</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Guess</th>
                            <th>Matching Letters</th>
                        </tr>
                    </thead>
                    <tbody>
                        {guessedWordRow}
                    </tbody>
                </table>
            </div>
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
