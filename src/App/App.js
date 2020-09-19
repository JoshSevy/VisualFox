import React, { useEffect, useState } from 'react';

import unsplash from '../helpers/unsplash';
import Header from '../Header/Header';
import Home from '../Home/Home';
import ErrorPage from '../ErrorPage/ErrorPage';
import Prompt from '../Prompt/Prompt';
import Results from '../Results/Results';
import { Redirect, Route } from 'react-router-dom';


const App = () => {
  const [images, setImages] = useState([]);
  const [boardName, setBoardName] = useState('')
  const [board, setBoard] = useState([]);
  const [error, setError] = useState(false);
  const [selectedPhotos, setSelectedPhotos] = useState();

  const onSearchSubmit = async (term) => {
    try {
      const response = await unsplash.get(
        "https://api.unsplash.com/search/photos",
        {
          params: { query: term },
        }
      )
      setImages(response.data.results)
    } catch (error) {
      setError(true)
    }
  };

  const resetError = () => {
    setError(false)
  };

  const getBoardName = (name) => {
    setBoardName(name)
  }

  const getSelectedPhoto = (image) => {
    setSelectedPhotos(image)
  }

  return (
    <section>
      <Header 
        resetError={resetError}
      />
      {(error) ? <Redirect to="/error"/>: null}
      <Route
        exact
        path="/"
        render={() => {
          return <Home />
        }}
      />
      <Route
        exact
        path="/prompt"
        render={({ match }) => {
          return (
          <Prompt
            onSearchSubmit={onSearchSubmit}
            getBoardName={getBoardName}
           />
          )
        }}
      />
      <Route
        exact
        path="/result"
        render={() => {
          return (
          <Results
            images={images}
            getSelectedPhoto={getSelectedPhoto}
           />
           )
        }}
      />
      <Route
        exact
        path="/error"
        render={() => {
          return <ErrorPage />
        }}
      />
    </section>
  );
}
export default App;
