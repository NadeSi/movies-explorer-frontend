import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import Navigation from '../Navigation/Navigation';
import NavigationLink from '../NavigationLink/NavigationLink';
import AccountButton from '../AccountButton/AccountButton';
import CloseButton from '../CloseButton/CloseButton';

import './Sidebar.css';

function Sidebar(props) {
  useEffect(() => {
    return () => {
      props.onClose();
    };
  }, []);

  return (
    <>
      <div className={`sidebar${props.isOpen ? ' sidebar_active' : ''}`}>
        <CloseButton onClose={props.onClose} />
        <div className="sidebar__content">
          <Navigation className="sidebar__navigation" classNameLinks="sidebar__links">
            <NavigationLink
              exact
              to="/"
              text="Главная"
              className="sidebar__link"
              activeClassName="sidebar__link_active"
            />
            <NavigationLink
              to="/movies"
              text="Фильмы"
              className="sidebar__link"
              activeClassName="sidebar__link_active"
            />
            <NavigationLink
              to="/saved-movies"
              text="Сохранённые фильмы"
              className="sidebar__link"
              activeClassName="sidebar__link_active"
            />
          </Navigation>
          <AccountButton />
        </div>
      </div>
      <div className={`layout-mask${props.isOpen ? ' layout-mask_active' : ''}`} />
    </>
  );
}

Sidebar.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Sidebar;
