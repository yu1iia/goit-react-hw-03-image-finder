import React, { Component } from 'react';
import PropTypes from 'prop-types';

//styles
// import s from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
    render() {
        return (
            <button type='button'></button>
        )
    }
}
// eslint-disable-next-line react/no-typos
ImageGalleryItem.PropTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ImageGalleryItem;