import React from 'react';
import PropTypes from 'prop-types';

import './styles/index.css';

function Button(props) {
  function handleClick(e) {
    e.preventDefault();
    props.onClick(e);
  }

  return (
    <button
      className={`button ${props.className ? props.className : ''}`}
      onClick={handleClick}
      disabled={props.disabled}>
      {props.children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.any,
  disabled: PropTypes.bool,
};

export default Button;
