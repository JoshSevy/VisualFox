import React, { useState, useEffect, useRef } from 'react';
import './ImageCard.scss';

const ImageCard = (props) => {
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

  const { alt_description, urls } = props.image;

  return (
    <div style={{gridRowEnd: `span ${spans}`}}>
      <img 
        className="image"
        ref={imageRef} 
        alt={alt_description} 
        src={urls.small} 
      />
    </div>
  );
};

export default ImageCard;
