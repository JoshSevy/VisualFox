import React, { useState, useEffect, useRef } from 'react';
import './ImageCard.scss';

const ImageCard = (props) => {
  const [photoSelected, setPhotoSelected] = useState(false)
  const [spans, setSpans] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    imageRef.current.addEventListener('load', setImageSpans);
  }, []);

  
  const setImageSpans = () => {
    const height = imageRef.current.clientHeight;
    const cardSpans = Math.ceil(height / 20);

    setSpans(cardSpans);
  };

  const { alt_description, urls, getSelectedPhoto } = props.image;

  return (
    <div style={{gridRowEnd: `span ${spans}`}}>
      <img 
        className={(!photoSelected)? "image": "image selected"}
        
        ref={imageRef} 
        alt={alt_description} 
        src={urls.small} 
        onClick={() => setPhotoSelected(!photoSelected)}
        // getSelectedPhoto={getSelectedPhoto(props.image)}
      />
    </div>
  );
};

export default ImageCard;
