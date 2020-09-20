import React, { useState } from 'react';
import { Redirect, Route } from "react-router-dom";

import unsplash from '../helpers/unsplash';

import Header from '../Header/Header';
import Home from '../Home/Home';
import ErrorPage from '../ErrorPage/ErrorPage';
import Prompt from '../Prompt/Prompt';
import Results from '../Results/Results';
import Board from '../Board/Board';


const App = () => {
  const [images, setImages] = useState([]);
  const [boardName, setBoardName] = useState();
  const [error, setError] = useState(false);
  const [boardImages, setBoardImages] = useState([]);
  const [promptNumber, setPromptNumber] = useState(1);
  const [builtBoard, setBuiltBoard] = useState({})

  const onSearchSubmit = async (term) => {
    try {
      const response = await unsplash.get(
        "https://api.unsplash.com/search/photos",
        {
          params: { query: term },
        }
      ).then(response => setImages(response.data.results))
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
        render={({ match }) => {
          return (
            <Board
              name={match.params.name}
              builtBoard={builtBoard}
            />
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
