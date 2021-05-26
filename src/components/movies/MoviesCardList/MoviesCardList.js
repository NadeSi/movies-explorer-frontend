import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import MoviesCard from '../MoviesCard/MoviesCard';
import Button from '../../common/Button/Button';

import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';

function MoviesCardList(props) {
  // const moviesCardList = null;
  const moviesCardList = [
    {
      name: '33 слова о дизайне',
      duration: '82',
      imageUrl: 'https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg',
    },
    {
      name: '33 слова о дизайне',
      duration: '82',
      imageUrl: 'https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg',
    },
    {
      name: '33 слова о дизайне',
      duration: '82',
      imageUrl: 'https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg',
    },
    {
      name: '33 слова о дизайне',
      duration: '82',
      imageUrl: 'https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg',
    },
    {
      name: '33 слова о дизайне',
      duration: '82',
      imageUrl: 'https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg',
    },
    {
      name: '33 слова о дизайне',
      duration: '82',
      imageUrl: 'https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg',
    },
  ];
  return (
    <section className="section movies-card-list">
      {moviesCardList ? (
        <div className="section__content">
          <div className="section__content movies-card-list__card-grid">
            {moviesCardList.map((moviesCard, index) => (
              <MoviesCard key={`movies-card-${index}`} {...moviesCard} />
            ))}
          </div>
          {moviesCardList.length > 0 && <Button className={'button_type_outline movies-card-list__button'}>Ещё</Button>}
        </div>
      ) : (
        <Preloader />
      )}
    </section>
  );
}

MoviesCardList.propTypes = {};

export default MoviesCardList;
