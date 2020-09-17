import React from 'react';
import './Board.scss';

const Board = () => {

  return(
    <article className="Board">
    <h2>Here is Your Board!</h2>
      <article className="image-container">
      {/* <ImageList images={images} /> */}
      </article>
      <button>Next Prompt!</button>
      <button>Start Over!</button>
    </article>
    )
}