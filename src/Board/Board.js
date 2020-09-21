import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ImageList from '../ImageList/ImageList';

import './Board.scss';

const Board = ({builtBoard, saveBuiltBoard, resetPrompts}) => {

  return (
    <article className="Board">
      <h2>{builtBoard.name}</h2>
      <article className="board-btn-container">
        <Link 
          to="/" 
          className="btn btn-white"
          onClick={() => saveBuiltBoard()}
        >
          Save Board
        </Link>
        <Link 
          to="/" 
          className="btn btn-white"
          onClick={() => resetPrompts()}
        >
          Delete Board
        </Link>
      </article>
      <ImageList images={builtBoard.images} />
    </article>
  );
}

export default Board;

Board.propTypes = {
  builtBoard: PropTypes.object,
  saveBuiltBoard: PropTypes.func,
  removeBuiltBoard: PropTypes.func,
}