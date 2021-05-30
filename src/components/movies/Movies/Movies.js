import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import MoviesContainer from '../MoviesContainer/MoviesContainer';

import './Movies.css';

function Movies(props) {
  return (
    <main className="movies">
      <MoviesContainer {...props} useButtonLoadMore={true} />
    </main>
  );
}

Movies.propTypes = {
  loggedIn: PropTypes.bool,
  showPopupMessage: PropTypes.func,
  movies: PropTypes.array,
  savedMovies: PropTypes.array,
  onChangeFavorite: PropTypes.func,
};

export default withRouter(Movies);
