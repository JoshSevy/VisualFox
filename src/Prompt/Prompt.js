import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import './Prompt.scss';
import foxLogo from '../assets/logo/foxLogo.png'
import { options } from '../helpers/dropdownOptions'

const Prompt = ({onSearchSubmit, getBoardName}) => {
  const [mainSelection, setMainSelection] = useState('default')
  const [selected, setSelected] = useState()
  const [promptNumber, setPromptNumber] = useState(0)
  const [boardName, setBoardName] = useState('');
  
  const selectOptions = options[mainSelection];

  const renderSubCategoryOptions = selectOptions.map(selection => {
      return <option value={selection.value} label={selection.label} />
  });

  const renderMainOptions = options.categories.map((selection) => {
    return <option value={selection.value} label={selection.label} />;
  });

  const clearPromptState = () => {
    setSelected({});
    setPromptNumber(0);
    setBoardName('');
  }

  return (
    <article className="Prompt">
      <article className="prompt-card">
        <img className="Header-logo" src={foxLogo} />
        <h2>What type of board are we building today?</h2>
        {promptNumber === 0 ? (
          <article className="prompt-input">
            <label>Name your Board:</label>
            <input
              type="text"
              placeholder="Lets name this board"
              value={boardName}
              onChange={(e) => setBoardName(e.target.value)}
              required
            />
            <label>Select a Board Type</label>
            <select 
              onChange={(e) => setMainSelection(e.target.value)}
              required
            >
              {renderMainOptions}
            </select>
            <label>SubCategory</label>
            <select 
              onChange={(e) => setSelected(e.target.value)}
              required
            >
              {renderSubCategoryOptions}
            </select>
          </article>
        ) : null}
        {promptNumber === 1 ? <h2>hello</h2> : null}
        {promptNumber === 2 ? <h2>hello</h2> : null}
        {promptNumber === 3 ? <h2>hello</h2> : null}
      </article>
      <article className="prompt-buttons-container">
        <Link
          to="/prompt"
          className="btn btn-prompt"
          onClick={() => clearPromptState()}
        >
          <p className="btn-text">Start Over</p>
        </Link>
        <Link
          to="/result"
          className="btn btn-prompt"
          onClick={() => onSearchSubmit(selected)}
          getBoardName={getBoardName(boardName)}
        >
          <p className="btn-text">Next</p>
        </Link>
      </article>
    </article>
  );
}

export default Prompt