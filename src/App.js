import React, { Component } from 'react'
import { connect } from 'react-redux'

import GuessWord from './GuessWord';
import Congrats from './Congrats';
import { getSecretWord } from './action'
import Input from './Input';

export class UnconnectedApp extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getSecretWord()
    }
    render() {
        const { success, guessedWords } = this.props
        return (
            <div data-test="component-app" className="App">
                <h1>Jotto</h1>
                <Congrats success={success} />
                <Input />
                <GuessWord guessedWords={guessedWords} />
            </div>
        )
    }
}

const mapPropsToState = ({ success, guessedWords, secretWord }) => {
    return { success, guessedWords }
}

export default connect(mapPropsToState, { getSecretWord })(UnconnectedApp)