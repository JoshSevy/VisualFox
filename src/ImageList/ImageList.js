import React from 'react';
import PropTypes from 'prop-types';
import ImageCard from '../ImageCard/ImageCard'
import './ImageList.scss';

const ImageList = ({images, getResultSelections, resultSelections}) => {
  const displayImages = images.map((image) => {
    return (
      <ImageCard 
        id={image.id}
        key={image.id}
        image={image} 
        resultSelections={resultSelections}
        getResultSelections={getResultSelections}
      />
    ) 
  });

  return <div className="image-list">{displayImages}</div>;

};

export default ImageList

ImageList.propTypes = {
  images: PropTypes.array,
  getResultSelections: PropTypes.func,
  resultSelections: PropTypes.array
}
