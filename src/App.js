import React, { Component } from 'react'

import GuessWord from './GuessWord';
import Congrats from './Congrats';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Jotto</h1>
                <Congrats success={false} />
                <GuessWord guessedWords={[{
                    guessedWord: 'train',
                    letterMatchCount: 3
                }]} />
            </div>
        )
    }
}
