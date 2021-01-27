import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from './actions';

class Input extends Component {
    render() {
        return (
        this.props.success ? null :
        <form data-test='input-component' className='form-inline'>    
            <input 
                data-test="input-box" 
                className='mb-2 mx-sm-3' 
                type="text"
                placeholder="enter guess"/>
            <button 
                data-test="submit-button"
                className='btn btn-primary mb-2 '
                type='submit'
                >
                    Submit
            </button>
        </form> 
        )
    }
}

const mapStateToProps = ( { success } ) => {
    return {
        success
    }
}

export default connect( mapStateToProps, { guessWord } )(Input);