import React from 'react';
import { Link } from 'react-router-dom';
import Board from '../Board/Board'
import './Home.scss';
import '../style/buttons.scss'

const Home = () => {

  const boardImages = ["https://loremflickr.com/640/360", "https://loremflickr.com/640/360", "https://loremflickr.com/640/360", "https://loremflickr.com/640/360", "https://loremflickr.com/640/360", "https://loremflickr.com/640/360", "https://loremflickr.com/640/360", "https://loremflickr.com/640/360", "https://loremflickr.com/640/360", "https://loremflickr.com/640/360", "https://loremflickr.com/640/360"]

  const renderExampleImages = boardImages.map(board => {
    return (
      <div 
        className="image-card"
        key={Math.random(Date.now()) * 5}
      >
        <img
          className="home-image"
          src={board}
          alt="lorem ipsum photos"
        />
      </div>
    );
  })
    

  return (
    <article className="Home">
      <h1>Visualize Your Goals</h1>
      <div className="home-carousel">{renderExampleImages}</div>
      <article className="info-section">
        <h2>Info Section</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper
          auctor neque vitae tempus. Non odio euismod lacinia at quis risus sed.
          Facilisis gravida neque convallis a cras. Urna id volutpat lacus
          laoreet. Sit amet dictum sit amet justo donec enim diam. Habitant
          morbi tristique senectus et netus. Ultrices neque ornare aenean
          euismod. Morbi tempus iaculis urna id volutpat lacus. Mauris in
          aliquam sem fringilla.
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