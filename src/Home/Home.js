import React from 'react';
import Board from '../Board/Board'
import './Home.scss';

import {boardOne} from '../helpers/boardsData'

const Home = () => {

  return(
    <article className="Home">
      <h1>Home</h1>
      <Board 
        images={ boardOne } 
      />
    </article>
  )
}

export default Home;