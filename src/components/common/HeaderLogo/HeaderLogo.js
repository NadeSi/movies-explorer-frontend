import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import headerLogo from '../../../images/header-logo.svg';

import {COMPONENTS_TEXT} from '../../../utils/const/components-text';

import './HeaderLogo.css';

function HeaderLogo(props) {
  return (
    <Link className="link header-logo" to={'/'}>
      <img src={headerLogo} alt={COMPONENTS_TEXT.HEADER_TEXT} />
    </Link>
  );
}

HeaderLogo.propTypes = {};

export default HeaderLogo;
