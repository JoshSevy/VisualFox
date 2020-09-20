import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ImageList from '../ImageList/ImageList';
import './Results.scss';

const Results = ({images, getBoardPhotos, promptNumber}) => {
  const [resultSelections, setResultSelections] = useState([]);

  const getResultSelections = (image) => {
    const maxSelection = resultSelections;
    maxSelection.push(image);
    if (maxSelection.length > 2) {
      maxSelection.shift();
    }
    setResultSelections(maxSelection);
  };

  return (
    <section className="Results">
      <article className="next-button-container">
        <Link to={`/prompt/${promptNumber}`}
          className="btn btn-white"
          onClick={() => getBoardPhotos(resultSelections)}
        >
          Continue
        </Link>
      </article>
      <h3>Choose Two Pictures</h3>
      <ImageList 
        images={images} 
        resultSelections={resultSelections}
        getResultSelections={getResultSelections}
      />
    </section>
  );
}

export default Results;