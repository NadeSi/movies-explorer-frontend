import React from 'react';
import PropTypes from 'prop-types';

import './Navigation.css';

function Navigation(props) {
  return (
    <nav className={`navigation ${props.className ? props.className : ''}`}>
      <ul className={`navigation__links ${props.classNameLinks ? props.classNameLinks : ''}`}>{props.children}</ul>
    </nav>
  );
}

Navigation.propTypes = {
  className: PropTypes.string,
  classNameLinks: PropTypes.string,
  children: PropTypes.array,
};

export default Navigation;
