import React, {useState, useEffect} from 'react';
import './ImageCard.scss'

const ImageCard = (props) => {
  const [spans, setSpans] = useState(0);

  const imageRef = React.createRef();

  useEffect(() => {
    imageRef.current.addEventListener('load', setImageSpans);
  }, [])
  
  const setImageSpans = () => {
    const height = imageRef.current.clientHeight;
    const cardSpans = Math.ceil(height / 20);

    setSpans(cardSpans);
  };
  const { description, urls } = props.image;

  return (
    <div style={{gridRowEnd: `span ${spans}`}}>
      <img 
        ref={imageRef} 
        alt={description} 
        src={urls.regular} 
      />
    </div>
  );
};

export default ImageCard;
