import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';

import {ReactComponent as AccountIcon} from '../../../images/account-icon.svg';
import Button from '../Button/Button';
import {ROUTES} from '../../../utils/const/routes';

import './AccountButton.css';

function AccountButton(props) {
  const history = useHistory();

  const goToAccountPage = () => {
    history.push(ROUTES.PROFILE);
  };

  return (
    <Button className="button_type_text-only account-button" onClick={goToAccountPage}>
      <span className="account-button__text">Аккаунт</span>
      <span className="account-button__icon">
        <AccountIcon />
      </span>
    </Button>
  );
}

AccountButton.propTypes = {};

export default AccountButton;
