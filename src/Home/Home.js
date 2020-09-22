import React from 'react';
import { Link } from 'react-router-dom';

import { homeImages } from '../helpers/visualFoxData';
import './Home.scss';
import '../style/buttons.scss'

const Home = () => {

  const renderExampleImages = homeImages.map(board => {
    return (
      <div 
        className="image-card"
        key={Math.random(Date.now()) * 5}
      >
        <img
          className="home-image"
          src={board}
          alt="display images food beards and motivating images"
        />
      </div>
    );
  })
    

  return (
    <article className="Home">
      <h1>Visualize Your Goals</h1>
      <div className="home-carousel">{renderExampleImages}</div>
      <article className="info-section">
        <h2>But Why?</h2>
        <p>
          When you take the time to figure out what you want and dream about
          what would be the most awesome achievement you can imagine, then know
          that to make it a reality you will need to become the kind of person
          who has done everything to realize their dream. Create a vision board that captures the life, the qualities and the essence of who you will be when you’ve reached your goal.
        </p>
      </article>
      <article className="home-start-section">
        <article className="home-start">
          <Link to="/prompt/1" className="btn btn-white">
            <p className="btn-text">Lets get started!</p>
          </Link>
        </article>
      </article>
    </article>
  );
}

export default Home;