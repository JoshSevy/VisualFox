import React, { useState } from 'react';
import ImageCard from '../ImageCard/ImageCard'
import './ImageList.scss';

const ImageList = ({images, getResultSelections, resultSelections}) => {

  const displayImages = images.map((image) => {
    return (
      <ImageCard 
        key={image.id}
        id={image.id} 
        image={image} 
        resultSelections={resultSelections}
        getResultSelections={getResultSelections}
      />
    ) 
  });

  return <div className="image-list">{displayImages}</div>;
};

export default ImageList