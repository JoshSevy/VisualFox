import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Header.scss';
import '../style/buttons.scss';
import  foxLogo  from '../assets/logo/foxLogo.png';


const Header = () => {

  return (
    <section>
      <article className="Header">
        <Link to="/">
          <img
            alt="Visual fox logo orange fox head"
            className="Header-logo"
            src={foxLogo}
          />
        </Link>
        <h1 className="Header-title">VisualFox</h1>
      </article>
      <article className="Header-links">
        <NavLink to="/" className="btn btn-white">
          <p className="btn-text">Home</p>
        </NavLink>
        <NavLink to="/boards" className="btn btn-white">
          <p className="btn-text">Boards</p>
        </NavLink>
        <NavLink to="/prompt" className="btn btn-white">
          <p className="btn-text">New Board</p>
        </NavLink>
      </article>
    </section>
  );
}

export default Header;