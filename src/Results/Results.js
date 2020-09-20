import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ImageList from '../ImageList/ImageList';

const Results = ({images, getBoardPhotos, promptNumber}) => {
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
      <article className="next-prompt">
        <Link to='/prompt/{promptNumber}'
          className=".btn .btn-white"
          onClick={getBoardPhotos(imagesMarked)}
        >
          Continue
        </Link>
      </article>
      <h3>Choose Two Pictures</h3>
      <ImageList 
        images={images} 
        imagesMarked={imagesMarked}
        selectionMax={selectionMax}
      />
    </section>
  );
}

export default Results;