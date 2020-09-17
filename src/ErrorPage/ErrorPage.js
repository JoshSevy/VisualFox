import React from 'react';
import './ErrorPage.scss';

import foxLogo from '../assets/logo/foxLogo.png'

const ErrorPage = () => {
  return (
    <article className="ErrorPage">
      <img 
        className="error-logo"
        alt="Visual fox logo orange fox head"
        src={foxLogo}
      />
      <h2>Add Error Message for user</h2>
    </article>
  )
}

export default ErrorPage;