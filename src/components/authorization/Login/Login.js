import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import FloatLabelInput from '../../common/input/FloatLabelInput/FloatLabelInput';
import AuthorizationForm from '../AuthorizationForm/AuthorizationForm';

import {ROUTES} from '../../../utils/const/routes';
import {COMPONENTS_TEXT} from '../../../utils/const/components-text';

import './Login.css';

function Login(props) {
  const {onLogin, ...rest} = props;

  return (
    <AuthorizationForm
      title={COMPONENTS_TEXT.LOGIN_TITLE}
      submitText={COMPONENTS_TEXT.LOGIN_SUBMIT}
      text={COMPONENTS_TEXT.LOGIN_TEXT}
      linkText={COMPONENTS_TEXT.REGISTER}
      link={ROUTES.SIGNUP}
      inputElement={FloatLabelInput}
      showPassword={true}
      onSubmit={onLogin}
      {...rest}
    />
  );
}

Login.propTypes = {
  onLogin: PropTypes.func,
};

export default withRouter(Login);
