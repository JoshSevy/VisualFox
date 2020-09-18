import React from 'react';
import ImageList from '../ImageList/ImageList'
import './Board.scss';

const Board = (props) => {

  return(
    <article className="Board">
    <h2>Here is Your Board!</h2>
      <article className="image-container">
      <ImageList images={props.images} />
      </article>
    </article>
    )
}

export default Board;