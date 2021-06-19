import styles from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Button from "../Button/Button";
import propTypes from "prop-types";

const ImageGallery = ({ images, addPage }) => {
  return (
    <div>
      <ul className={styles.ImageGallery}>
        {images.map((img) => (
          <ImageGalleryItem key={img.id} imageData={img}></ImageGalleryItem>
        ))}
      </ul>
      

      {images.length > 0 ? (
        <Button addPage={addPage} type="button"></Button>
       
        ) : null}
        
      
    </div>
  );
};

ImageGallery.propTypes = {
  addPage: propTypes.func.isRequired,
  images: propTypes.arrayOf(propTypes.object.isRequired),
};

export default ImageGallery;
