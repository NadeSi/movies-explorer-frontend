import React from 'react';
import PropTypes from 'prop-types';

import './NavigationCustomLink.css';

function NavigationCustomLink(props) {
  const {className, text, ...rest} = props;
  return (
    <li>
      <a className={`link navigation-custom-link ${className ? className : ''}`} {...rest}>
        {text}
      </a>
    </li>
  );
}

NavigationCustomLink.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default NavigationCustomLink;
