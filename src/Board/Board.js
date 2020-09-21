import React from 'react';
import { Link } from 'react-router-dom';

import ImageList from '../ImageList/ImageList';

import './Board.scss';

const Board = ({builtBoard, name}) => {

  return(
    <article className="Board">
      <article className="board-btn-container">
        <Link 
          to="/" 
          className="btn btn-white"
        >
          Save Board
        </Link>
        <Link 
          to="/" 
          className="btn btn-white"
        >
          Delete Board
        </Link>
      </article>
    <h2>{builtBoard.name}</h2>
    <ImageList 
      images={builtBoard.images}
    />
    </article>
    )
}

export default Board;