import React, { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';

import './Prompt.scss';
import foxLogo from '../assets/logo/foxLogo.png'
import { options } from '../helpers/dropdownOptions'

const Prompt = () => {
  const [selected, setSelected] = useState(options.fitness[0])
  const [promptNumber, setPromptNumber] = useState(0)
  const [boardName, setBoardName] = useState('')

  return (
    <article className="Prompt">
      <article className="prompt-card">
        <img 
          className="Header-logo"
          src={foxLogo} />
        <h2>What type of board are we building today?</h2>
        {promptNumber === 0 ? (
          <article className="prompt-input">
            <label>Name your Board:</label>
            <input 
              type="text"
              placeholder="Lets name this board"
              value={boardName}
              onChange={(e) => setBoardName(e.target.value)}
            />
            <label>Select a Board Type</label>
            <select></select>
          </article>
        ) : null}
        {promptNumber === 1 ? <h2>hello</h2> : null}
        {promptNumber === 2 ? <h2>hello</h2> : null}
        {promptNumber === 3 ? <h2>hello</h2> : null}
      </article>
      <article className="prompt-buttons-container">
        <a className="btn btn-prompt">
          <p className="btn-text">Start Over</p>
        </a>
        <a className="btn btn-prompt">
          <p className="btn-text">Next Question</p>
        </a>
      </article>
    </article>
  );
}

export default Prompt