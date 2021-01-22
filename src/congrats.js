import React from 'react';
import PropTypes from 'prop-types';
/**
 * Functional react components for congratulatory message
 * @function
 * @returns { JSX.Element }
 */

const Congrats = (props) => {

    return (
        <div data-test="congrats-pannel" className="alert alert-success">
            <span data-test="congrats-message">{ props.success ? 'Congrats you made it' : null }</span>
        </div>
    )

}

export default Congrats;

Congrats.propTypes = {
 success: PropTypes.bool.isRequired   
}