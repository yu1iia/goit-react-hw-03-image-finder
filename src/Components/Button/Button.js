import React, { Component } from 'react';
import PropTypes from 'prop-types';

//styles
// import s from './Button.module.css';

class Button extends Component {
    render() {
        return (
            <button type='button'></button>
        )
    }
}
// eslint-disable-next-line react/no-typos
Button.PropTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Button;