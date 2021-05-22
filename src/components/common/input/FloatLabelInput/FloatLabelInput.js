import React from 'react';
import PropTypes from 'prop-types';

import InputComponent from '../InputComponent/InputComponent';

import './FloatLabelInput.css';

function FloatLabelInput(props) {
  return (
    <InputComponent
      {...props}
      className="float-label-input"
      classNameLabel="float-label-input__label"
      classNameInput="float-label-input__input"
    />
  );
}

FloatLabelInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  // children: PropTypes.element,
  onChange: PropTypes.func,
};

export default FloatLabelInput;
