import React from 'react';

/**
 * Functional react components for congratulatory message
 * @function
 * @returns { JSX.Element }
 */

const Congrats = (props) => {

    return (
        <div data-test="congrats-pannel">
            <div data-test="congrats-message">{ props.success ? 'Congrats you made it' : null }</div>
        </div>
    )

}

export default Congrats;