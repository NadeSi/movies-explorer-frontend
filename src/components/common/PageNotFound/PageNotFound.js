import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';

import './PageNotFound.css';

function PageNotFound(props) {
  return (
    <main className="page-not-found">
      <h2 className="page-not-found__title">404</h2>
      <p className="page-not-found__paragraph">Страница не найдена</p>
      <div className="page-not-found__link-container">
        <Link className="link link_type_normal page-not-found__link" to="/">
          Назад
        </Link>
      </div>
    </main>
  );
}

PageNotFound.propTypes = {};

export default withRouter(PageNotFound);
