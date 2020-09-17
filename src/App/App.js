import React, { useEffect, useState } from 'react';

import unsplash from '../helpers/unsplash';
import Header from '../Header/Header';
import Home from '../Home/Home';
import ErrorPage from '../ErrorPage/ErrorPage';
import { Route } from 'react-router-dom';


const App = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);

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
    //  onSearchSubmit('health')
   }, [])

  return(
    <main>
    <Header />
    <Route exact path="/" 
      render={()=> {
        return <Home />
      }}
    />
    <Route exact path="/error"
      render={() => {
        return <ErrorPage />
      }}
    />
    </main>
  )
}
export default App;
