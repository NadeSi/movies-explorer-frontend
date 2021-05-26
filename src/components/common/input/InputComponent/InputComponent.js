import React from 'react';
import PropTypes from 'prop-types';

import './InputComponent.css';

function InputComponent(props) {
  const errorMessage = '';
  // const errorMessage = 'Что-то пошло не так...';

  const handleChangeInput = () => {
    props.onChange && props.onChange();
  };

  return (
    <div className={props.className ? props.className : 'input-component'}>
      <label
        className={props.classNameLabel ? props.classNameLabel : 'input-component__label'}
        htmlFor={`input-component-${props.name}`}>
        {props.label}
      </label>
      <input
        className={
          (props.classNameInput ? props.classNameInput : 'input-component__input') +
          (errorMessage ? ' input-component__input-error' : '')
        }
        // className={`input-component__input ${errorMessage ? 'input-component__input-error' : ''}`}
        type={props.type || 'text'}
        name={`input-component-${props.name}`}
        required
        placeholder={props.label}
        value={props.value}
        onChange={handleChangeInput}
      />
      {errorMessage && <span className={'input-component__error-msg'}>{errorMessage}</span>}
    </div>
  );
}

InputComponent.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  classNameLabel: PropTypes.string,
  classNameInput: PropTypes.string,
  // children: PropTypes.element,
  onChange: PropTypes.func,
};

export default InputComponent;
