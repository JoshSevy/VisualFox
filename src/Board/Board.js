import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ImageList from '../ImageList/ImageList';

import './Board.scss';

const Board = ({builtBoard}) => {

  return (
    <article className="Board">
      <h2>{builtBoard.name}</h2>
      <article className="board-btn-container">
        <Link to="/" className="btn btn-white">
          Save Board
        </Link>
        <Link to="/" className="btn btn-white">
          Delete Board
        </Link>
      </article>
      <ImageList images={builtBoard.images} />
    </article>
  );
}

export default Board;

Board.propTypes = {
  builtBoard: PropTypes.object
}