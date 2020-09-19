import React from 'react';

import ImageList from '../ImageList/ImageList';

const Results = ({images}) => {
  return (
    <section className="Results">
      <h3>Choose Two of Your Favorite Pictures</h3>
      <ImageList images={images} />
    </section>
  );
}

export default Results;