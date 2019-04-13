import React, { Component } from 'react'
import { connect } from 'react-redux'

import { guessWord } from './action'

export class UnconnectedInput extends Component {
    constructor(props) {
        super(props);

        this.inputBox = React.createRef()

        this.submitGuessWord = this.submitGuessWord.bind(this)
    }

    submitGuessWord(e) {
        e.preventDefault()
        const { value } = this.inputBox.current;

        this.props.guessWord(value)

    }
    render() {
        const content = this.props.success ? null : (
            <form className="form-inline">
                <input
                    data-test="input-box"
                    ref={this.inputBox}
                    id="word-guess"
                    type="text" />
                <button data-test="submit-button"
                    onClick={this.submitGuessWord}
                    type="submit">Guess Word</button>
            </form>
        )
        return (
            <div data-test="component-input">
                {content}
            </div>
        )
    }
}

const mapStateToProps = ({ success }) => {
    return { success }
}

export default connect(mapStateToProps, { guessWord })(UnconnectedInput)

