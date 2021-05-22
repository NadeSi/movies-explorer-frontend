import React from 'react';
import PropTypes from 'prop-types';

import {ReactComponent as PromoLogo} from '../../../images/promo-logo.svg';

import './Promo.css';

function Promo(props) {
  return (
    <section id="promo" className="section promo">
      <div className="section__content">
        <PromoLogo className="promo__logo" />
        <h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>
      </div>
    </section>
  );
}

Promo.propTypes = {};

export default Promo;
