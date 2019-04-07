export function getLetterMatchCount(guessedWord, secretWord) {
    const secretLetters = new Set(secretWord.split(''))
    const guessedLetters = new Set(guessedWord.split(''))

    return [...secretLetters].filter(letter => guessedLetters.has(letter)).length
}