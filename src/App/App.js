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
  const [boardName, setBoardName] = useState('');
  const [error, setError] = useState(false);
  const [boardImages, setBoardImages] = useState([]);

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

  const resetError = () => {
    setError(false)
  };

  const getBoardName = (name) => {
    setBoardName(name)
  }

  const getBoardPhotos = (image) => {
    const photos = boardImages;
    photos.push(image);
    setBoardImages(photos)
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
        path="/prompt/:prompt"
        render={() => {
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
            getBoardPhotos={getBoardPhotos}
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
