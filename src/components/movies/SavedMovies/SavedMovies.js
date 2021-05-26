import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useHistory, withRouter} from 'react-router-dom';

import Header from '../../common/Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../../common/Footer/Footer';

import './SavedMovies.css';

function SavedMovies(props) {
  return (
    <main className="saved-movies">
      <Header loggedIn={true} />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </main>
  );
}

SavedMovies.propTypes = {};

export default withRouter(SavedMovies);
