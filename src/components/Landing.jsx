import React from 'react';
import undrawBooks from '../assets/Undraw_Books.svg';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>
              Australia's most awarded online Library Platform
            </h1>
            <h2>
              Find your dream book with <span className="purple">Library</span>
            </h2>
            <Link to="#features">
              <button className="btn">
                Browse Books
              </button>
            </Link>
          </div>
          <figure className="header__image--wrapper">
            <img src={undrawBooks} alt="Library Hero" className="header__image" />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Landing;