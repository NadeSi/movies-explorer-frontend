import React from 'react';
import PropTypes from 'prop-types';

import Divider from '../../common/Divider/Divider';
import TechsCard from './Card/TechsCard';

import './Techs.css';

function Techs(props) {
  return (
    <section id={'techs'} className="section techs">
      <div className="section__content">
        <h2 className="section__header">Технологии</h2>
        <Divider />
        <h3 className="techs__header">7 технологий</h3>
        <p className="techs__paragraph">
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
        <div className="techs__cards">
          <TechsCard text={'HTML'} />
          <TechsCard text={'CSS'} />
          <TechsCard text={'JS'} />
          <TechsCard text={'React'} />
          <TechsCard text={'Git'} />
          <TechsCard text={'Express.js'} />
          <TechsCard text={'mongoDB'} />
        </div>
      </div>
    </section>
  );
}

Techs.propTypes = {};

export default Techs;
