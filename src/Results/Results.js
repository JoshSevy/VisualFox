import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ImageList from '../ImageList/ImageList';

const Results = ({images, getBoardPhotos}) => {
  const [imagesMarked, setImagesMarked] = useState([]);


  const selectionMax = (image) => {
    const markedArray = imagesMarked;
    markedArray.push(image);
    if (markedArray.length > 2) {
      markedArray.shift();
    }
    setImagesMarked(markedArray);
  };

  useEffect(() => {

  }, [imagesMarked])

  return (
    <section className="Results">
      <Link to='/prompt/1' className=".btn .btn-white">Continue</Link>
      <h3>Choose Two Pictures</h3>
      <ImageList 
        images={images} 
        imagesMarked={imagesMarked}
        getBoardPhotos={getBoardPhotos}
        selectionMax={selectionMax}
      />
    </section>
  );
}

export default Results;