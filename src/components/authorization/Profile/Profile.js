import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useHistory, withRouter} from 'react-router-dom';

import AuthorizationForm from '../AuthorizationForm/AuthorizationForm';
import Header from '../../common/Header/Header';
import Button from '../../common/Button/Button';

import './Profile.css';

function Profile(props) {
  const FooterComponent = () => {
    return (
      <>
        <Button className="button button_type_text-only profile__button-edit" type="submit">
          Редактировать
        </Button>
        <Button className="button button_type_text-only profile__button-exit">Выйти из аккаунта</Button>
      </>
    );
  };

  return (
    <AuthorizationForm
      title={'Привет, Виталий!'}
      showDivider={true}
      headerComponent={<Header loggedIn={true} />}
      footerComponent={<FooterComponent />}
      className={'profile'}
    />
  );
}

Profile.propTypes = {};

export default withRouter(Profile);
