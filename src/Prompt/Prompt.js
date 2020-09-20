import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import './Prompt.scss';
import foxLogo from '../assets/logo/foxLogo.png'
import { options, promptHeadings} from '../helpers/dropdownOptions'

const Prompt = ({onSearchSubmit, getBoardName, getPromptNumber, promptNumber}) => {
  const [mainSelection, setMainSelection] = useState('default')
  const [selected, setSelected] = useState()
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
    setBoardName('');
  }

  return (
    <article className="Prompt">
      <article className="prompt-card">
        <img className="Header-logo" src={foxLogo} />
        <h2>{promptHeadings[promptNumber - 1]}</h2>
        <article className="prompt-input">
        {promptNumber === 1 ? (
          <>
          <label>Name your Board:</label>
          <input
            type="text"
            placeholder="Lets name this board"
            value={boardName}
            onChange={(e) => setBoardName(e.target.value)}
          />
          </>
          ): null}
          <label>Select a Board Type</label>
          <select onChange={(e) => setMainSelection(e.target.value)}>
            {renderMainOptions}
          </select>
          <label>SubCategory</label>
          <select onChange={(e) => setSelected(e.target.value)}>
            {renderSubCategoryOptions}
          </select>
        </article>
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
          onClick={() => {
            onSearchSubmit(selected);
            getPromptNumber();
          }}
          getBoardName={getBoardName(boardName)}
        >
          <p className="btn-text">Next</p>
        </Link>
      </article>
    </article>
  );
}

export default Prompt