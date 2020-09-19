import React from 'react';
import ImageCard from '../ImageCard/ImageCard'
import './ImageList.scss';

const ImageList = ({images, getSelectedPhoto}) => {
  const displayImages = images.map((image) => {
    return <ImageCard key={image.id} image={image} getSelectedPhoto={getSelectedPhoto}/>;
  });

  return <div className="image-list">{displayImages}</div>;
};

export default ImageList