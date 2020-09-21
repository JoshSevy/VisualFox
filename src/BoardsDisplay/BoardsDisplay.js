import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import foxLogo from '../assets/logo/foxLogo.png'
import './BoardsDisplay.scss';

const BoardsDisplay = ({savedBoards, removeBuiltBoard}) => {

  const renderBoards = (savedBoards) ?
  savedBoards.map(board => {
    return (
     <article className="board-card" key={board.name}>
      <h3>{board.name}</h3>
      <img src={foxLogo} 
        className="prompt-logo" 
        alt="orange fox drawing" 
        onDoubleClick={(e) => removeBuiltBoard(e)}  
      />
      <Link to={`/board/${board.name}`} className="btn btn-white">View Me!</Link>
    </article>
    ) 
  }) : (
    <article className="no-boards">
      <h3>No Boards Yet, Lets Build One!</h3>
      <Link to="/prompt/1" className="btn btn-white">Lets Go!</Link>
    </article>
  );

  return (
    <article className="BoardsDisplay">
      <h2>Your Saved Boards!</h2>
      {renderBoards}
    </article>
  )
}

export default BoardsDisplay;

BoardsDisplay.propTypes = {
  removeBuiltBoard: PropTypes.func,
  savedBoards: PropTypes.array,
}