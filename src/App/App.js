import React, { useState } from 'react';
import { Redirect, Route } from "react-router-dom";

import { unsplashResponse } from '../helpers/unsplash';

import Header from '../Header/Header';
import Home from '../Home/Home';
import ErrorPage from '../ErrorPage/ErrorPage';
import Prompt from '../Prompt/Prompt';
import Results from '../Results/Results';
import Board from '../Board/Board';
import BoardsDisplay from '../BoardsDisplay/BoardsDisplay';

const App = () => {
  const [images, setImages] = useState([]);
  const [boardName, setBoardName] = useState();
  const [error, setError] = useState(false);
  const [boardImages, setBoardImages] = useState([]);
  const [promptNumber, setPromptNumber] = useState(1);
  const [builtBoard, setBuiltBoard] = useState({});
  const [savedBoards, setSavedBoards] = useState([]);

  const onSearchSubmit = async (term) => {
    try {
      await unsplashResponse(term).then(response => setImages(response.data.results));
    } catch (error) {
      setError(true)
    }
  };

  const getBuiltBoard = () => {
    const board = {
      id: Date.now(),
      name: boardName,
      images: boardImages
    }
    setBuiltBoard(board)
  }

  const saveBuiltBoard = () => {
    const boards = [...savedBoards, builtBoard] || [builtBoard];
    setSavedBoards(boards);
    setBuiltBoard({})
  }

  const removeBuiltBoard = (e) => {
    const boards = savedBoards;
    const index = boards.indexOf(e.target.id);
    boards.splice(index, 1);
    setSavedBoards(boards)
  }

  const findSavedBoardByName = (name) => {
    return savedBoards.find(board => board.name === name);
  }

  const resetError = () => {
    setError(false)
  };

  const resetPrompts = () => {
    setBoardName("");
    setPromptNumber(1);
    setBoardImages([]);
  };

  const getBoardName = (name) => {
    const persistName = boardName || name;
    setBoardName(persistName)
  }

  const getBoardPhotos = (images) => {
    const persistPhotos = [...images, ...boardImages] || [images]
      setBoardImages(persistPhotos);
  }

  const getPromptNumber = () => {
    setPromptNumber(promptNumber + 1);
  }

  return (
    <section>
      <Header resetError={resetError} />
      {error ? <Redirect to="/error" /> : null}
      <Route
        exact
        path="/"
        render={() => {
          return <Home />;
        }}
      />
      <Route
        exact
        path="/prompt/:prompt"
        render={() => {
          return (
            <Prompt
              onSearchSubmit={onSearchSubmit}
              getBoardName={getBoardName}
              getPromptNumber={getPromptNumber}
              promptNumber={promptNumber}
              getBuiltBoard={getBuiltBoard}
              resetPrompts={resetPrompts}
              boardName={boardName}
            />
          );
        }}
      />
      <Route
        exact
        path="/result/:selected"
        render={({ match }) => {
          return (
            <Results
              images={images}
              getBoardPhotos={getBoardPhotos}
              promptNumber={promptNumber}
            />
          );
        }}
      />
      <Route
        exact
        path="/board/:name"
        render={() => {
          return (
            <Board
              builtBoard={builtBoard}
              saveBuiltBoard={saveBuiltBoard}
              resetPrompts={resetPrompts}
            />
          );
        }}
      />
      <Route
        exact
        path="/savedboards"
        render={() => {
          return (
            <BoardsDisplay
              savedBoards={savedBoards}
              removeBuiltBoard={removeBuiltBoard}
            />
          );
        }}
      />
      <Route
        exact
        path="/savedboards/:name"
        render={({match}) => {
          return (
            (match.params.name === undefined) ? 
            <Board 
              selectedBoard={findSavedBoardByName(match.params.name)}
            /> :
            <ErrorPage />
          );
        }}
      />
      <Route
        exact
        path="/error"
        render={() => {
          return <ErrorPage />;
        }}
      />
    </section>
  );
}
export default App;
