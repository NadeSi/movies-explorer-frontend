import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import AuthorizationForm from '../AuthorizationForm/AuthorizationForm';
import FloatLabelInput from '../../common/input/FloatLabelInput/FloatLabelInput';

import {ROUTES} from '../../../utils/const/routes';
import {COMPONENTS_TEXT} from '../../../utils/const/components-text';

import './Register.css';

function Register(props) {
  const {onRegister, ...rest} = props;

  return (
    <AuthorizationForm
      title={COMPONENTS_TEXT.REGISTER_TITLE}
      submitText={COMPONENTS_TEXT.REGISTER_SUBMIT}
      text={COMPONENTS_TEXT.REGISTER_TEXT}
      linkText={COMPONENTS_TEXT.LOGIN_SUBMIT}
      link={ROUTES.SIGNIN}
      inputElement={FloatLabelInput}
      showName={true}
      showPassword={true}
      onSubmit={onRegister}
      {...rest}
    />
  );
}

Register.propTypes = {
  onRegister: PropTypes.func,
};

export default withRouter(Register);
