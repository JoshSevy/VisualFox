import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import  foxLogo  from '../assets/logo/foxLogo.png';


const Header = () => {

  return (
    <article className="Header">
      <Link to="/">
        <img 
          alt="Visual fox logo orange fox head"
          className="Header-logo" 
          src={foxLogo}/>
      </Link>
      <h1 className="Header-title">VisualFox</h1>
      <article className="Header-links">
        <button>Home</button>
        <button>Boards</button>
        <button>New Board</button>
      </article>
    </article>
  );
}

export default Header;