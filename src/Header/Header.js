import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss'


const Header = () => {



  return (
    <article className="Header">
      <Link to="/">Logo</Link>
      <h1 className="Header-title">Visualize Your Goals</h1>
      <article className="Header-links">
        <button>Home</button>
        <button>Boards</button>
        <button>New Board</button>
      </article>
    </article>
  );
}

export default Header;