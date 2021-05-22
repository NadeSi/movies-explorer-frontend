import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import Divider from '../../common/Divider/Divider';
import AboutProjectCards from './Cards/AboutProjectCards';
import AboutProjectTable from './Table/AboutProjectTable';

import './AboutProject.css';

function AboutProject(props) {
  return (
    <section id={'about-project'} className="section about-project">
      <div className="section__content">
        <h2 className="section__header">О проекте</h2>
        <Divider />
        <AboutProjectCards />
        <AboutProjectTable />
      </div>
    </section>
  );
}

AboutProject.propTypes = {};

export default AboutProject;
