import React, { useEffect, useState } from 'react';
import './App.scss';

import unsplash from '../helpers/unsplash';
import Header from '../Header/Header';
import ImageList from '../ImageList/ImageList';


const App = () => {
  const [images, setImages] = useState([]);

   const onSearchSubmit = async (term) => {
     const response = await unsplash.get(
       "https://api.unsplash.com/search/photos",
       {
         params: { query: term },
       }
     );
     setImages(response.data.results);
   };

  //  useEffect(() => {
  //    onSearchSubmit('health')
  //  }, [])

  return(
    <main>
    <Header />
    {(images)?
    <ImageList 
      images={images}
    />
   : null }
    </main>
  )
}
export default App;
