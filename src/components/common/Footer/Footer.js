import React from 'react';
import PropTypes from 'prop-types';

import Divider, {dividerType} from '../Divider/Divider';
import Navigation from '../Navigation/Navigation';
import NavigationCustomLink from '../NavigationCustomLink/NavigationCustomLink';

import './Footer.css';

function Footer(props) {
  return (
    <footer className="section footer">
      <div className="section__content">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <Divider type={dividerType.SECONDARY} />
        <div className="footer__content">
          <p className="footer__copyright">© 2020</p>
          <Navigation classNameLinks="footer__links">
            <NavigationCustomLink
              text="Яндекс.Практикум"
              href="https://praktikum.yandex.ru/"
              target="_blank"
              className="footer__link"
            />
            <NavigationCustomLink
              text="Github"
              href="https://github.com/NadeSi"
              target="_blank"
              className="footer__link"
            />
            <NavigationCustomLink
              text="Facebook"
              href="https://www.facebook.com/NadeSii"
              target="_blank"
              className="footer__link"
            />
          </Navigation>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
