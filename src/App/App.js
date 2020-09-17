import React, { useState } from 'react';
import './App.scss';

import Header from '../Header/Header'




const App = () => {
  const [images, setImages] = useState();

   onSearchSubmit = async (term) => {
     const response = await unsplash.get(
       "https://api.unsplash.com/search/photos",
       {
         params: { query: term },
       }
     );
     setImages(response.data.results);
   };



  return(
    <Header />
  )
}
export default App;
