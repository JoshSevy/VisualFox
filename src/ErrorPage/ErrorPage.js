import React from 'react';
import './ErrorPage.scss';

import foxLogo from '../assets/logo/foxLogo.png'

const ErrorPage = () => {
  return (
    <article className="ErrorPage">
      <h2>Oh No! Sorry!</h2>
      <img 
        className="error-logo"
        alt="Visual fox logo orange fox head"
        src={foxLogo}
      />
      <h2>Looks Like Something Went Wrong On Our End</h2>
    </article>
  )
}

export default ErrorPage;