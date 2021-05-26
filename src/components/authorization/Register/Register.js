import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useHistory, withRouter} from 'react-router-dom';

import AuthorizationForm from '../AuthorizationForm/AuthorizationForm';
import FloatLabelInput from '../../common/input/FloatLabelInput/FloatLabelInput';

import './Register.css';

function Register(props) {
  return (
    <AuthorizationForm
      // showHeader={true}
      showPassword={true}
      inputElement={FloatLabelInput}
      title={'Добро пожаловать!'}
      submitText={'Зарегистрироваться'}
      text={'Уже зарегистрированы?'}
      linkText={'Войти'}
      link={'/signin'}
    />
  );
}

Register.propTypes = {};

export default withRouter(Register);
