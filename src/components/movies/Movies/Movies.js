import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useHistory, withRouter} from 'react-router-dom';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';

import './Movies.css';

function Movies(props) {
  return (
    <main className="movies">
      <Header loggedIn={true} />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </main>
  );
}

Movies.propTypes = {};

export default withRouter(Movies);
