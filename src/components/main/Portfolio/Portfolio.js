import React from 'react';
import PropTypes from 'prop-types';

import {ReactComponent as PortfolioLink} from '../../../images/link.svg';
import Divider, {dividerType} from '../../common/Divider/Divider';

import './Portfolio.css';

function Portfolio(props) {
  return (
    <section className="section portfolio">
      <div className="section__content">
        <h2 className="portfolio__header">Портфолио</h2>
        <div className="portfolio__link-body">
          <a className="portfolio__link" href="https://github.com/NadeSi/how-to-learn" target="_blank" rel="noreferrer">
            Статичный сайт
            <PortfolioLink />
          </a>
        </div>
        <Divider type={dividerType.SECONDARY} />
        <div className="portfolio__link-body">
          <a
            className="portfolio__link"
            href="https://nadesi.github.io/russian-travel/"
            target="_blank"
            rel="noreferrer">
            Адаптивный сайт
            <PortfolioLink />
          </a>
        </div>
        <Divider type={dividerType.SECONDARY} />
        <div className="portfolio__link-body">
          <a
            className="portfolio__link"
            href="https://github.com/NadeSi/react-mesto-api-full"
            target="_blank"
            rel="noreferrer">
            Одностраничное приложение
            <PortfolioLink />
          </a>
        </div>
      </div>
    </section>
  );
}

Portfolio.propTypes = {};

export default Portfolio;
