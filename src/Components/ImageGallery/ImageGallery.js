import React, { Component } from 'react';
import PropTypes from 'prop-types';

//styles
// import s from './ImageGallery.module.css';

class ImageGallery extends Component {
    render() {
        return (
            <button type='button'></button>
        )
    }
}
// eslint-disable-next-line react/no-typos
ImageGallery.PropTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ImageGallery;