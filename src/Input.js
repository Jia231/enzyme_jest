import React, { Component } from 'react'
import { connect } from 'react-redux'

class Input extends Component {
    render() {
        const content = this.props.success ? null : (
            <form className="form-inline">
                <input
                    data-test="input-box"
                    id="word-guess"
                    type="text" />
                <button data-test="submit-button" type="submit"></button>
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

export default connect(mapStateToProps)(Input)

