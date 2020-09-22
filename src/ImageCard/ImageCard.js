import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './ImageCard.scss';

const ImageCard = (props) => {
  const [spans, setSpans] = useState(0);
  const [isCardMarked, setIsCardMarked] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    imageRef.current.addEventListener('load', setImageSpans);
  }, []);

  const setImageSpans = () => {
    const height = imageRef.current.clientHeight;
    const cardSpans = Math.ceil(height / 20);

    setSpans(cardSpans);
  };

  const { alt_description, urls, id } = props.image;

  return (
    <div style={{gridRowEnd: `span ${spans}`}}>
      <img 
        className={(!isCardMarked) ? "image": "image selected"}
        id={id}
        ref={imageRef} 
        alt={alt_description} 
        src={urls.regular} 
        onClick={() => {
          setIsCardMarked(!isCardMarked);
          props.getResultSelections(props.image)}}
      />
    </div>
  );
};

export default ImageCard;

ImageCard.propTypes = {
  image: PropTypes.object,
  id: PropTypes.string,
  getResultSelections: PropTypes.func,
  resultSelection: PropTypes.array,
};
