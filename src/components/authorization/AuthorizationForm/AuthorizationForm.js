import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link, useHistory, withRouter} from 'react-router-dom';

import './AuthorizationForm.css';
import InputComponent from '../../common/input/InputComponent/InputComponent';
import headerLogo from '../../../images/header-logo.svg';
import Divider, {dividerType} from '../../common/Divider/Divider';
import Button from '../../common/Button/Button';
import HeaderLogo from '../../common/HeaderLogo/HeaderLogo';

function AuthorizationForm(props) {
  const {title, submitText, text, linkText, link} = props;
  const {inputElement: InputElement = InputComponent} = props;

  const name = 'pochtaName';
  const email = 'pochta@yandex.ru';
  const password = 'pochta@yandex.ru';

  return (
    <div className={`authorization ${props.className ? props.className : ''}`}>
      {props.headerComponent}
      <div className={`authorization__content ${props.contentClassName ? props.contentClassName : ''}`}>
        {!props.headerComponent && (
          <header className="authorization__header">
            {/*<img className="header__logo" src={headerLogo} alt="Логотип заголовка" />*/}
            <HeaderLogo />
          </header>
        )}
        <h2 className={`authorization__title`}>{title}</h2>
        <form className={'authorization__form'} name={`authorization-form`} id={`authorization-form`}>
          <InputElement
            className={'input-component authorization__form__input_name'}
            name={'authorization-form-name'}
            value={name}
            label={'Имя'}
          />
          {props.showDivider && <Divider type={dividerType.SECONDARY} />}
          <InputElement
            className={'input-component authorization__form__input_email'}
            name={'authorization-form-email'}
            value={email}
            label={'E-mail'}
          />
          {props.showPassword && (
            <InputElement
              className={'input-component authorization__form__input_password'}
              name={'authorization-form-password'}
              value={password}
              type={'password'}
              label={'Пароль'}
            />
          )}
        </form>
        <div className="authorization__footer">
          {props.footerComponent ? (
            props.footerComponent
          ) : (
            <>
              <button className="button authorization__button-submit" type="submit">
                {submitText}
              </button>
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
  showDivider: PropTypes.bool,
  headerComponent: PropTypes.element,
  footerComponent: PropTypes.element,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  inputElement: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  showPassword: PropTypes.bool,
};

export default AuthorizationForm;
