import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ImageList from '../ImageList/ImageList';
import './Results.scss';

const Results = ({images, getBoardPhotos, promptNumber}) => {
  const [resultSelections, setResultSelections] = useState([]);

  const getResultSelections = (image) => {
    const maxSelection = resultSelections;
    maxSelection.push(image);
    setResultSelections(maxSelection);
  };

  return (
    <section className="Results">
      <h3>Choose Some Inspiration</h3>
      <article className="next-button-container">
        <Link
          to={`/prompt/${promptNumber}`}
          className="btn btn-white"
          onClick={() => getBoardPhotos(resultSelections)}
        >
          Continue
        </Link>
      </article>
      <ImageList
        images={images}
        resultSelections={resultSelections}
        getResultSelections={getResultSelections}
      />
    </section>
  );
}

export default Results;

Results.propTypes = {
  images: PropTypes.array,
  getBoardPhotos: PropTypes.func,
  promptNumber: PropTypes.number,
}