import React from 'react';
import PropTypes from 'prop-types';

import './styles/index.css';

function Button(props) {
  return (
    <button className={`button ${props.className ? props.className : ''}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func,
};

export default Button;
