import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import './AboutProjectCards.css';

function AboutProjectCards(props) {
  return (
    <div className="about-project__cards">
      <div className="about-project__card">
        <h3 className="card__heading">Дипломный проект включал 5 этапов</h3>
        <p className="card__text">
          Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
        </p>
      </div>
      <div className="about-project__card">
        <h3 className="card__heading">На выполнение диплома ушло 5 недель</h3>
        <p className="card__text">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
        </p>
      </div>
    </div>
  );
}

AboutProjectCards.propTypes = {};

export default AboutProjectCards;
