import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Header.scss';
import  foxLogo  from '../assets/logo/foxLogo.png';

const Header = ({resetError}) => {
  return (
    <section>
      <article className="Header">
        <Link to="/">
          <img
            alt="Visual fox logo orange fox head"
            className="Header-logo"
            src={foxLogo}
            onClick={resetError}
          />
        </Link>
        <h1 className="Header-title">VisualFox</h1>
      </article>
      <article className="Header-links">
        <NavLink to="/" className="btn btn-white">
          <p className="btn-text" onClick={resetError}>
            Home
          </p>
        </NavLink>
        <NavLink to="/savedboards" className="btn btn-white">
          <p className="btn-text">Boards</p>
        </NavLink>
        {/* <NavLink to="/prompt" className="btn btn-white">
          <p className="btn-text">New Board</p>
        </NavLink> */}
      </article>
    </section>
  );
}

export default Header;

Header.propTypes = {
  resetError: PropTypes.func,
}