import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Prompt.scss';
import foxLogo from '../assets/logo/foxLogo.png'
import { options, promptHeadings} from '../helpers/dropdownOptions'

const Prompt = ({onSearchSubmit, getBoardName, getPromptNumber, promptNumber, resetPrompts, getBuiltBoard, boardName}) => {
  const [mainSelection, setMainSelection] = useState('default')
  const [selected, setSelected] = useState()
  const [name, setName] = useState('');
  
  const selectOptions = options[mainSelection];

  const renderSubCategoryOptions = selectOptions.map(selection => {
      return <option value={selection.value} label={selection.label} />
  });

  const renderMainOptions = options.categories.map((selection) => {
    return <option value={selection.value} label={selection.label} />;
  });

  const resultsPageLoad = () => {
    getPromptNumber();
    getBoardName(name);
    onSearchSubmit(selected);
  }

  const clearPromptState = () => {
    setSelected({});
    setName("");
  };

  const finalPromptRender = (
    <article className="final-prompt">
      <img 
        className="final-prompt-logo" 
        src={foxLogo} 
        alt="orange fox drawing"
      />
      <h2 className="final-prompt-title">Congrats! You Finished Your Goal Board</h2>
      <article >
        <Link 
          to={`/board/${boardName}`} 
          className="btn btn-white"
          onClick={() => {
            getBuiltBoard()
            resetPrompts()
            clearPromptState()
            }}
        >
          Build Your Board!
        </Link>
      </article>
    </article>
  );

  if (promptNumber === 5) {
    return finalPromptRender;
  } else {
    return (
      <article className="Prompt">
        <article className="prompt-card">
          <img src={foxLogo} className="prompt-logo" alt="orange fox drawing" />
          <h2>{promptHeadings[promptNumber - 1]}</h2>
          <article className="prompt-input">
            {promptNumber === 1 ? (
              <>
                <label>Name your Board:</label>
                <input
                  type="text"
                  placeholder="Lets name this board"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </>
            ) : null}
            <label>Select a Category:</label>
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
            to="/prompt/1"
            className="btn btn-prompt"
            onClick={() => {
              resetPrompts();
              clearPromptState();
            }}
          >
            <p className="btn-text">Start Over</p>
          </Link>
          <Link
            to={`/result/${selected}`}
            className="btn btn-prompt"
            onClick={() => resultsPageLoad()}
          >
            <p className="btn-text">Next</p>
          </Link>
        </article>
      </article>
    );
  }
}

export default Prompt;

Prompt.propTypes = {
  onSearchSubmit: PropTypes.func,
  getBoardName: PropTypes.func,
  getPromptNumber: PropTypes.func,
  promptNumber: PropTypes.number,
  resetPrompts: PropTypes.func,
  getBuiltBoard: PropTypes.func,
  boardName: PropTypes.string
}
  