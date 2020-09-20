import React, { useState } from 'react';
import ImageCard from '../ImageCard/ImageCard'
import './ImageList.scss';

const ImageList = ({images, selectionMax, imagesMarked}) => {

  const displayImages = images.map((image) => {
    return (
      <ImageCard 
        key={image.id} 
        image={image} 
        imagesMarked={imagesMarked}
        selectionMax={selectionMax}
      />
    ) 
  });

  return <div className="image-list">{displayImages}</div>;
};

export default ImageList