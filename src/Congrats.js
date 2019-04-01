import React from 'react'
import propTypes from 'prop-types';


const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test="congrats-component">
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
          </span>
      </div>
    )
  }
  else {
    return (
      <div data-test="congrats-component">

      </div>
    )
  }
}

Congrats.propTypes = {
  success: propTypes.bool.isRequired
}
export default Congrats

