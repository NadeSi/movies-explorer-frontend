import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useHistory, withRouter} from 'react-router-dom';

import FloatLabelInput from '../../common/input/FloatLabelInput/FloatLabelInput';
import AuthorizationForm from '../AuthorizationForm/AuthorizationForm';

import './Login.css';

function Login(props) {
  return (
    <AuthorizationForm
      // showHeader={true}
      inputElement={FloatLabelInput}
      title={'Рады видеть!'}
      submitText={'Войти'}
      text={'Ещё не зарегистрированы?'}
      linkText={'Регистрация'}
      link={'/signup'}
    />
  );
}

Login.propTypes = {
  // loggedIn: PropTypes.bool,
};

export default withRouter(Login);
