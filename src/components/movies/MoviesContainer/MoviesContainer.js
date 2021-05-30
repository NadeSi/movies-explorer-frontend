import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';

import {MESSAGES} from '../../../utils/const/messages';
import {getFilteredMovies} from '../../../utils/movies-utils';

function MoviesContainer(props) {
  const {movies} = props;

  const [isLoading, setLoading] = useState(false);

  const [searchKeyOld, setSearchKeyOld] = useState('');
  const [searchKey, setSearchKey] = useState('');
  const [isShortFilm, setShortFilm] = useState(false);

  const [filteredMovies, setFilteredMovies] = useState(undefined);

  useEffect(() => {
    if (filteredMovies) {
      handleSearchMovies();
    }
  }, [movies]);

  useEffect(() => {
    if (filteredMovies && searchKey === searchKeyOld) {
      handleSearchMovies();
    }
  }, [isShortFilm]);

  const handleChangeSearchKey = (value) => {
    setSearchKey(value);
  };

  const handleChangeShortFilm = (value) => {
    setShortFilm(value);
  };

  const handleSearchMovies = () => {
    try {
      setLoading(true);
      filteredMovies && setFilteredMovies(undefined);
      setSearchKeyOld(searchKey);

      if (!searchKey) {
        props.showPopupMessage(MESSAGES.SEARCH_MOVIES_KEY_NF);
        return;
      }

      setFilteredMovies(getFilteredMovies({movies, searchKey, isShortFilm}));
    } catch (e) {
      props.showPopupMessage(MESSAGES.ERROR);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header loggedIn={props.loggedIn} />
      <SearchForm
        searchKey={searchKey}
        isShortFilm={isShortFilm}
        onChangeSearchKey={handleChangeSearchKey}
        onChangeShortFilm={handleChangeShortFilm}
        onSearchMovies={handleSearchMovies}
      />
      <MoviesCardList
        filteredMovies={filteredMovies}
        savedMovies={props.savedMovies}
        isLoading={isLoading}
        onChangeFavorite={props.onChangeFavorite}
        useIconDeleteFavorite={props.useIconDeleteFavorite}
        useButtonLoadMore={props.useButtonLoadMore}
      />
      <Footer />
    </>
  );
}

MoviesContainer.propTypes = {
  loggedIn: PropTypes.bool,
  showPopupMessage: PropTypes.func,
  movies: PropTypes.array,
  savedMovies: PropTypes.array,
  onChangeFavorite: PropTypes.func,
  useIconDeleteFavorite: PropTypes.bool,
  useButtonLoadMore: PropTypes.bool,
};

export default withRouter(MoviesContainer);
