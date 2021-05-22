import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import headerLogo from '../../../images/header-logo.svg';

import './HeaderLogo.css';

function HeaderLogo(props) {
  return (
    <Link className="link header-logo" to={'/'}>
      <img src={headerLogo} alt="Логотип заголовка" />
    </Link>
  );
}

HeaderLogo.propTypes = {};

export default HeaderLogo;
