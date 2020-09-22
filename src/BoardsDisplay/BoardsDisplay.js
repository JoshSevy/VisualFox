import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import foxLogo from '../assets/logo/foxLogo.png'
import './BoardsDisplay.scss';

const BoardsDisplay = ({savedBoards}) => {

  const renderBoards =
    !savedBoards.length === 0 || savedBoards.length > 0 ? (
      savedBoards.map((board) => {
        return (
          <article className="board-card" key={board.name}>
            <h3 className="board-card-title">{board.name}</h3>
            <div className="board-card-logo-container">
              <img
                src={foxLogo}
                className="board-card-logo"
                alt="orange fox drawing"
              />
            </div>
            <Link to={`/savedboards/${board.name}`} className="btn btn-white">
              View Me!
            </Link>
          </article>
        );
      })
    ) : (
      <article className="no-boards">
        <h3>No Boards Yet, Lets Build One!</h3>
        <div className="board-card-logo-container">
          <img
            src={foxLogo}
            className="no-boards-logo"
            alt="orange fox drawing"
          />
        </div>
        <Link to="/prompt/1" className="btn btn-white">
          Lets Go!
        </Link>
      </article>
    );

  return (
    <article className="BoardsDisplay">
      <h2>This Is Where We Hide Your Boards</h2>
      <article className="board-card-container">
        {renderBoards}
      </article>
    </article>
  )
}

export default BoardsDisplay;

BoardsDisplay.propTypes = {
  savedBoards: PropTypes.array,
}