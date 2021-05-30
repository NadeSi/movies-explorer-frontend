import React from 'react';
import PropTypes from 'prop-types';

import Divider from '../../common/Divider/Divider';
import Navigation from '../../common/Navigation/Navigation';
import NavigationCustomLink from '../../common/NavigationCustomLink/NavigationCustomLink';

import './AboutMe.css';

function AboutMe(props) {
  return (
    <section id={'about-me'} className="section about-me">
      <div className="section__content">
        <h2 className="section__header">Студент</h2>
        <Divider />
        <div className="about-me__body">
          <div className="about-me__photo-card" />
          <div className="about-me__content">
            <h3 className="about-me__name">Надежда</h3>
            <p className="about-me__about">Фронтенд-разработчик, 26 лет</p>
            <p className="about-me__info">
              Я живу в Москве, закончила факультет информатики и вычислительной техники МГСУ по специальности
              Автоматизированные системы управления. Работаю в сфере IT c 2016 года.
            </p>
            <Navigation className="about-me__navigation" classNameLinks="about-me__links">
              <NavigationCustomLink
                text="Facebook"
                href="https://www.facebook.com/NadeSii"
                target="_blank"
                className="about-me__link"
              />
              <NavigationCustomLink
                text="Github"
                href="https://github.com/NadeSi"
                target="_blank"
                className="about-me__link"
              />
            </Navigation>
          </div>
        </div>
      </div>
    </section>
  );
}

AboutMe.propTypes = {};

export default AboutMe;
