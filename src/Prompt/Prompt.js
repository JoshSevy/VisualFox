import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import './Prompt.scss';
import foxLogo from '../assets/logo/foxLogo.png'
import { options } from '../helpers/dropdownOptions'

const Prompt = ({onSearchSubmit}) => {
  const [selected, setSelected] = useState(null)
  const [promptNumber, setPromptNumber] = useState(0)
  const [boardName, setBoardName] = useState('');
  
  const selectOptions = options[selected];

  const renderSubCategoryOptions = (!selected === null) ? selectOptions.map(selection => {
      return <option value={selection.value} label={selection.label} />
  }) : null;

  const renderMainOptions = options.categories.map((selection) => {
    return <option value={selection.value} label={selection.label} />;
  });

  useEffect(() => {
    
  }, [selected]) 

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
            />
            <label>Select a Board Type</label>
            <select onChange={(e) => setSelected(e.target.value)}>
              {renderMainOptions}
            </select>
            <label>SubCategory</label>
            <select >
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
          to="/results"
          className="btn btn-prompt"
          onClick={() => console.log(selected)}
        >
          <p className="btn-text">Next</p>
        </Link>
      </article>
    </article>
  );
}

export default Prompt