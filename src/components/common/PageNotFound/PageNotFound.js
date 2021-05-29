import React from 'react';
import PropTypes from 'prop-types';
import {withRouter, useHistory} from 'react-router-dom';

import Button from '../Button/Button';

import './PageNotFound.css';

function PageNotFound(props) {
  const history = useHistory();

  return (
    <main className="page-not-found">
      <h2 className="page-not-found__title">404</h2>
      <p className="page-not-found__paragraph">Страница не найдена</p>
      <div className="page-not-found__link-container">
        <Button className="button_type_text-only page-not-found__button" onClick={() => history.goBack()}>
          Назад
        </Button>
      </div>
    </main>
  );
}

PageNotFound.propTypes = {};

export default withRouter(PageNotFound);
