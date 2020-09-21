import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ImageList from '../ImageList/ImageList';

import './Board.scss';

const Board = ({builtBoard, saveBuiltBoard, resetPrompts, selectedBoard, removeBuiltBoard}) => {

  return (
    <article className="Board">
      <h2>{(!selectedBoard) ? builtBoard.name : selectedBoard.name}</h2>
      <article className="board-btn-container">
        {!selectedBoard ? (
          <>
            <Link
              to="/savedboards"
              className="btn btn-white"
              onClick={() => saveBuiltBoard()}
            >
              Save Board
            </Link>
            <Link
              to="/prompt/1"
              className="btn btn-white"
              onClick={() => resetPrompts()}
            >
              Start Over
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/prompt/1"
              className="btn btn-white"
              onClick={() => resetPrompts()}
            >
              Build Another Board
            </Link>
            <Link
              to="/"
              className="btn btn-white"
              onClick={(e) => removeBuiltBoard(e)}
            >
              Delete Board
            </Link>
          </>
        )}
      </article>
      {!selectedBoard ? (
        <ImageList images={builtBoard.images} />
      ) : (
        <ImageList images={selectedBoard.images} />
      )}
    </article>
  );
}

export default Board;

Board.propTypes = {
  builtBoard: PropTypes.object,
  selectedBoard: PropTypes.object,
  saveBuiltBoard: PropTypes.func,
  resetPrompts: PropTypes.func,
  removeBuiltBoard: PropTypes.func,
}