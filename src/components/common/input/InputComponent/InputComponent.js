import React from 'react';
import PropTypes from 'prop-types';

import './InputComponent.css';

function InputComponent(props) {
  const {
    name,
    value,
    type,
    onChange,
    label,
    className,
    classNameContainer,
    classNameLabel,
    classNameInput,
    errorMessage,
    ...rest
  } = props;

  return (
    <div className={className ? className : 'input-component'}>
      <div className={classNameContainer ? classNameContainer : 'input-component__container'}>
        <label className={classNameLabel ? classNameLabel : 'input-component__label'} htmlFor={name}>
          {label}
        </label>
        <input
          className={
            (classNameInput ? classNameInput : 'input-component__input') +
            (errorMessage ? ' input-component__input-error' : '')
          }
          type={type || 'text'}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={label}
          {...rest}
        />
      </div>
      {errorMessage && <span className={'input-component__error-msg'}>{errorMessage}</span>}
    </div>
  );
}

InputComponent.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  classNameContainer: PropTypes.string,
  classNameLabel: PropTypes.string,
  classNameInput: PropTypes.string,
  onChange: PropTypes.func,
  errorMessage: PropTypes.string,
};

export default InputComponent;
