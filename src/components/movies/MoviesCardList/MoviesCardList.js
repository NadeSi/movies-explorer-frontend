import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import MoviesCard from '../MoviesCard/MoviesCard';
import Button from '../../common/Button/Button';
import Preloader from '../Preloader/Preloader';
import {useCurrentWidth} from '../../hooks/useCurrentWidth';

import {MESSAGES} from '../../../utils/const/messages';

import './MoviesCardList.css';

const getInitialCardsCount = (width) => {
  let initialCardsCount = 0;
  if (width > 768) {
    initialCardsCount = 12;
  } else if (width <= 768 && width > 480) {
    initialCardsCount = 8;
  } else if (width < 480) {
    initialCardsCount = 5;
  }
  return initialCardsCount;
};

function MoviesCardList(props) {
  const {filteredMovies, useButtonLoadMore} = props;

  const width = useCurrentWidth();
  const [visibleMoviesCount, setVisibleMoviesCount] = useState(getInitialCardsCount(width));
  const [pageSize, setPageSize] = useState(3);

  const [visibleMovies, setVisibleMovies] = useState([]);

  useEffect(() => {
    if (filteredMovies) {
      if (useButtonLoadMore) {
        setVisibleMovies(filteredMovies.slice(0, visibleMoviesCount));
      } else {
        setVisibleMovies(filteredMovies);
      }
    }
  }, [filteredMovies, visibleMoviesCount, useButtonLoadMore]);

  useEffect(() => {
    let pageSize = 0;
    if (width > 1280) {
      pageSize = 4;
    } else if (width <= 1280 && width > 768) {
      pageSize = 3;
    } else if (width <= 768) {
      pageSize = 2;
    }
    setPageSize(pageSize);
  }, [width]);

  const handleClickLoadMore = () => {
    setVisibleMoviesCount(visibleMoviesCount + pageSize);
  };

  return (
    <section className="section movies-card-list">
      {visibleMovies && visibleMovies.length > 0 ? (
        <div className="section__content">
          <div className="section__content movies-card-list__card-grid">
            {visibleMovies.map((moviesCard, index) => (
              <MoviesCard
                key={`movies-card-${index}`}
                moviesCard={moviesCard}
                onChangeFavorite={props.onChangeFavorite}
                useIconDeleteFavorite={props.useIconDeleteFavorite}
                savedMovies={props.savedMovies}
              />
            ))}
          </div>
          {useButtonLoadMore && filteredMovies.length > visibleMovies.length && (
            <Button className={'button_type_outline movies-card-list__button'} onClick={handleClickLoadMore}>
              Ещё
            </Button>
          )}
        </div>
      ) : (
        filteredMovies && <p>{MESSAGES.MOVIES_NF}</p>
      )}
      {props.isLoading && <Preloader />}
    </section>
  );
}

MoviesCardList.propTypes = {
  filteredMovies: PropTypes.array,
  savedMovies: PropTypes.array,
  isLoading: PropTypes.bool,
  onChangeFavorite: PropTypes.func,
  useIconDeleteFavorite: PropTypes.bool,
  useButtonLoadMore: PropTypes.bool,
};

export default MoviesCardList;
