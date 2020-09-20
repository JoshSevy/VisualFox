import React from 'react';

import ImageList from '../ImageList/ImageList';

import './Board.scss';

const Board = ({builtBoard, name}) => {

  return(
    <article className="Board">
    <h2>{name}</h2>
    <ImageList 
      images={builtBoard.images}
    />
    </article>
    )
}

export default Board;