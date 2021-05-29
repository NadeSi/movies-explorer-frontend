import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';

import Button from '../Button/Button';
import AccountButton from '../AccountButton/AccountButton';
import MenuButton from '../MenuButton/MenuButton';
import Navigation from '../Navigation/Navigation';
import NavigationLink from '../NavigationLink/NavigationLink';
import HeaderLogo from '../HeaderLogo/HeaderLogo';

import {ROUTES} from '../../../utils/const/routes';

import './Header.css';

function Header(props) {
  const history = useHistory();

  const goToLink = (link) => {
    history.push(link);
  };

  return (
    <header className="header">
      <div className="header__content">
        <HeaderLogo />
        {props.loggedIn ? (
          <>
            <Navigation classNameLinks="header__panel header__panel-navigation header__panel-button_hiding">
              <NavigationLink
                text="Фильмы"
                to="/movies"
                className="header__panel-navigation-link"
                activeClassName="header__panel-navigation-link_active"
              />
              <NavigationLink
                text="Сохранённые фильмы"
                to="/saved-movies"
                className="header__panel-navigation-link"
                activeClassName="header__panel-navigation-link_active"
              />
            </Navigation>
            <div className="header__panel header__panel-button header__panel-button_hiding">
              <AccountButton />
            </div>
            <MenuButton className="header__menu-button" />
          </>
        ) : (
          <div className="header__panel header__panel-button">
            <Button className="button_type_text-only" onClick={() => goToLink(ROUTES.SIGNUP)}>
              Регистрация
            </Button>
            <Button onClick={() => goToLink(ROUTES.SIGNIN)}>Войти</Button>
          </div>
        )}
      </div>
    </header>
  );
}

Header.propTypes = {
  loggedIn: PropTypes.bool,
};

export default Header;
