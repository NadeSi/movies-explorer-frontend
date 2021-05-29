import React from 'react';
import PropTypes from 'prop-types';

import favoriteIconActive from '../../../images/favorite-active-icon.svg';
import favoriteDeleteIcon from '../../../images/favorite-delete-icon.svg';
import favoriteIcon from '../../../images/favorite-icon.svg';

import {getTimeStr} from '../../../utils/movies-utils';
import {COMPONENTS_TEXT} from '../../../utils/const/components-text';

import './MoviesCard.css';

function MoviesCard(props) {
  const {nameRU: name, image: imageUrl, duration, movieId, trailer} = props.moviesCard;
  const time = getTimeStr(duration);

  const savedMovie = props.savedMovies.find((movie) => +movie.movieId === movieId);
  const isFavoriteButtonActive = !!savedMovie;
  const favoriteButtonActiveClassName = 'movies-card__favorite-button_active';

  const handleClickFavoriteButton = () => {
    const isFavorite = !isFavoriteButtonActive;
    props.onChangeFavorite &&
      props.onChangeFavorite({
        movie: savedMovie ? savedMovie : props.moviesCard,
        isFavorite: props.useIconDeleteFavorite ? false : isFavorite,
      });
  };

  const handleClickCard = () => {};

  return (
    <div className="movies-card" onClick={handleClickCard}>
      <div className="movies-card__info">
        <div className="movies-card__text-group">
          <a className="movies-card__trailer-link" href={trailer} target="_blank" rel="noreferrer">
            <h2 className="movies-card__name">{name}</h2>
          </a>
          <p className="movies-card__time">{time}</p>
        </div>
        <button
          className={`movies-card__favorite-button ${isFavoriteButtonActive ? favoriteButtonActiveClassName : ''} ${
            props.useIconDeleteFavorite ? 'movies-card__favorite-button_padding' : ''
          }`}
          type="button"
          onClick={handleClickFavoriteButton}>
          <img
            className={`movies-card__favorite-button-icon${
              props.useIconDeleteFavorite ? ' movies-card__favorite-button-icon-close' : ''
            }`}
            src={
              props.useIconDeleteFavorite
                ? favoriteDeleteIcon
                : isFavoriteButtonActive
                ? favoriteIconActive
                : favoriteIcon
            }
            alt={COMPONENTS_TEXT.MOVIE_IMG}
          />
        </button>
      </div>
      {/*<div className="movies-card__img" style={{backgroundImage: `url(${imageUrl})`}} />*/}
      <img className="movies-card__img" src={imageUrl} alt={COMPONENTS_TEXT.MOVIE_IMG} />
    </div>
  );
}

MoviesCard.propTypes = {
  moviesCard: PropTypes.any,
  onChangeFavorite: PropTypes.func,
  useIconDeleteFavorite: PropTypes.bool,
  savedMovies: PropTypes.array,
};

export default MoviesCard;
