import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import Header from '../../common/Header/Header';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../../common/Footer/Footer';

import './Main.css';

export function Main(props) {
  return (
    <main className="main">
      <Header loggedIn={false} />
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </main>
  );
}

Main.propTypes = {};

export default withRouter(Main);
