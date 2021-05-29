import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import MoviesContainer from '../MoviesContainer/MoviesContainer';

import './SavedMovies.css';

function SavedMovies(props) {
  return (
    <main className="saved-movies">
      <MoviesContainer {...props} movies={props.savedMovies} useIconDeleteFavorite={true} />
    </main>
  );
}

SavedMovies.propTypes = {
  loggedIn: PropTypes.bool,
  showPopupMessage: PropTypes.func,
  savedMovies: PropTypes.array,
  onChangeFavorite: PropTypes.func,
};

export default withRouter(SavedMovies);
