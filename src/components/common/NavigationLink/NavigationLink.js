import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

import './NavigationLink.css';

function NavigationLink(props) {
  const {className, text, ...rest} = props;
  return (
    <li>
      <NavLink className={`link navigation-link ${className ? className : ''}`} {...rest}>
        {text}
      </NavLink>
    </li>
  );
}

NavigationLink.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

export default NavigationLink;
