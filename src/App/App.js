import React, { useEffect, useState } from 'react';

import unsplash from '../helpers/unsplash';
import Header from '../Header/Header';
import Home from '../Home/Home';
import ErrorPage from '../ErrorPage/ErrorPage';
import Prompt from '../Prompt/Prompt';
import ImageList from '../ImageList/ImageList';
import { Route } from 'react-router-dom';


const App = () => {
  const [images, setImages] = useState([]);
  const [board, setBoard] = useState([]);
  const [error, setError] = useState(false);
  const [selectedSearch, setSelectedSearch] = useState();

   const onSearchSubmit = async (term) => {
     const response = await unsplash.get(
       "https://api.unsplash.com/search/photos",
       {
         params: { query: term },
       }
     ).catch(() => setError(true));
     setImages(response.data.results);
   };

   useEffect(() => {
    // onSearchSubmit('loft')
   }, [])

  return (
    <section>
      <Header />
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
           />
          )
        }}
      />
      <Route
        exact
        path="/result"
        render={({ match }) => {
          return (
          <ImageList
            images={images}
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
