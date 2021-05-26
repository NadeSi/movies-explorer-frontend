import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import Navigation from '../../common/Navigation/Navigation';
import NavigationCustomLink from '../../common/NavigationCustomLink/NavigationCustomLink';

import './NavTab.css';

function NavTab(props) {
  return (
    <section className="section nav-tab">
      <Navigation className="section__content nav-tab__content" classNameLinks="nav-tab__links">
        <NavigationCustomLink text="О проекте" href="#about-project" className="nav-tab__link" />
        <NavigationCustomLink text="Технологии" href="/#techs" className="nav-tab__link" />
        <NavigationCustomLink text="Студент" href="/#about-me" className="nav-tab__link" />
      </Navigation>
    </section>
  );
}

NavTab.propTypes = {};

export default NavTab;
