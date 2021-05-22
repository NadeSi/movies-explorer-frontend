import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import favoriteIconActive from '../../../images/favorite-active-icon.svg';
import favoriteIcon from '../../../images/favorite-icon.svg';

import './MoviesCard.css';

function MoviesCard(props) {
  // const time = `${parseInt(props.duration / 60)}ч `;
  const time = `1ч 47м`;
  const [isFavoriteButtonActive, setFavoriteButtonActive] = useState(false);
  const favoriteButtonActiveClassName = 'movies-card__favorite-button_active';

  const handleClickFavoriteButton = () => {
    setFavoriteButtonActive(!isFavoriteButtonActive);
  };

  return (
    <div className="movies-card">
      <div className="movies-card__info">
        <div className="movies-card__text-group">
          <h2 className="movies-card__name">{props.name}</h2>
          <p className="movies-card__time">{time}</p>
        </div>
        <button
          className={`movies-card__favorite-button ${isFavoriteButtonActive ? favoriteButtonActiveClassName : ''}`}
          type="button"
          onClick={handleClickFavoriteButton}>
          <img
            className="movies-card__favorite-button-icon"
            src={isFavoriteButtonActive ? favoriteIconActive : favoriteIcon}
          />
        </button>
      </div>
      <div className="movies-card__img" style={{backgroundImage: `url(${props.imageUrl})`}} />
    </div>
  );
}

MoviesCard.propTypes = {
  name: PropTypes.string,
  duration: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default MoviesCard;
