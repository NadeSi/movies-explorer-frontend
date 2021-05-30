import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import InputComponent from '../../common/input/InputComponent/InputComponent';
import Divider, {dividerType} from '../../common/Divider/Divider';
import Button from '../../common/Button/Button';
import HeaderLogo from '../../common/HeaderLogo/HeaderLogo';
import {useFormWithValidation} from '../../hooks/useFormWithValidation';

import './AuthorizationForm.css';

function AuthorizationForm(props) {
  const {title, submitText, text, linkText, link, initialValues = {name: '', email: ''}} = props;
  const {inputElement: InputElement = InputComponent} = props;

  const {values, handleChange, errors, isValid, resetForm} = useFormWithValidation();

  useEffect(() => {
    return () => {
      resetForm();
      props.resetErrors && props.resetErrors();
    };
  }, []);

  useEffect(() => {
    props.setValid && props.setValid(isValid);
    props.setEditValues && props.setEditValues(values);
  }, [isValid, values]);

  const handleSubmit = (e) => {
    props.onSubmit && props.onSubmit(values);
  };

  return (
    <div className={`authorization ${props.className ? props.className : ''}`}>
      {props.headerComponent}
      <div className={`authorization__content ${props.contentClassName ? props.contentClassName : ''}`}>
        {!props.headerComponent && (
          <header className="authorization__header">
            <HeaderLogo />
          </header>
        )}
        <h2 className={`authorization__title`}>{title}</h2>
        <form className={'authorization__form'} name={`authorization-form`} id={`authorization-form`}>
          {props.showName && (
            <InputElement
              className={'input-component authorization__form__input_name'}
              name={'name'}
              value={
                values && values['name'] !== undefined && values['name'] !== null ? values['name'] : initialValues.name
              }
              errorMessage={errors['name']}
              label={'Имя'}
              onChange={handleChange}
              required
              minLength={2}
              maxLength={30}
              pattern="^[а-яА-ЯёЁa-zA-Z][а-яА-ЯёЁa-zA-Z- ]+$"
            />
          )}
          {props.showDivider && <Divider type={dividerType.SECONDARY} />}
          <InputElement
            className={'input-component authorization__form__input_email'}
            name={'email'}
            value={
              values && values['email'] !== undefined && values['email'] !== null
                ? values['email']
                : initialValues.email
            }
            errorMessage={errors['email']}
            label={'E-mail'}
            onChange={handleChange}
            required
            type={'email'}
          />
          {props.showPassword && (
            <InputElement
              className={'input-component authorization__form__input_password'}
              name={'password'}
              value={values['password'] || ''}
              errorMessage={errors['password']}
              label={'Пароль'}
              onChange={handleChange}
              required
              type={'password'}
              minLength={8}
            />
          )}
        </form>
        <div className="authorization__footer">
          {props.footerComponent ? (
            props.footerComponent
          ) : (
            <>
              {props.authErrorMessage && (
                <span className={'authorization__link-container authorization__error-msg'}>
                  {props.authErrorMessage}
                </span>
              )}
              <Button
                className="button authorization__button-submit"
                type="submit"
                onClick={handleSubmit}
                disabled={!isValid}>
                {submitText}
              </Button>
              <div className="authorization__link-container">
                <span>{text}</span>
                <span>
                  <Link className="link link_type_normal" to={link}>
                    {linkText}
                  </Link>
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

AuthorizationForm.propTypes = {
  title: PropTypes.string,
  submitText: PropTypes.string,
  text: PropTypes.string,
  linkText: PropTypes.string,
  link: PropTypes.string,
  initialValues: PropTypes.object,
  authErrorMessage: PropTypes.string,
  //elements
  inputElement: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  headerComponent: PropTypes.element,
  footerComponent: PropTypes.element,
  //classNames
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  //shows
  showName: PropTypes.bool,
  showPassword: PropTypes.bool,
  showDivider: PropTypes.bool,
  //functions
  resetErrors: PropTypes.func,
  setValid: PropTypes.func,
  setEditValues: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default AuthorizationForm;
