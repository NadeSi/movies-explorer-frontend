import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import {CurrentUserContext} from '../../../contexts/CurrentUserContext';

import AuthorizationForm from '../AuthorizationForm/AuthorizationForm';
import Header from '../../common/Header/Header';
import Button from '../../common/Button/Button';

import {COMPONENTS_TEXT} from '../../../utils/const/components-text';

import './Profile.css';

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [isValid, setValid] = useState(false);
  const [editValues, setEditValues] = useState({});

  const isDisabledButton =
    Object.keys(currentUser).filter((key) => editValues[key] && editValues[key] === currentUser[key]).length > 0 ||
    !isValid;

  const handleUpdateProfile = (e) => {
    props.onUpdateProfile &&
      props.onUpdateProfile({
        name:
          editValues && editValues['name'] !== undefined && editValues['name'] !== null
            ? editValues['name']
            : currentUser.name,
        email:
          editValues && editValues['email'] !== undefined && editValues['email'] !== null
            ? editValues['email']
            : currentUser.email,
      });
  };

  const FooterComponent = () => {
    return (
      <>
        <Button
          className="button button_type_text-only profile__button-edit"
          type="submit"
          disabled={isDisabledButton}
          onClick={handleUpdateProfile}>
          Редактировать
        </Button>
        <Button className="button button_type_text-only profile__button-exit" onClick={props.onLogout}>
          Выйти из аккаунта
        </Button>
      </>
    );
  };

  return (
    <AuthorizationForm
      title={`${COMPONENTS_TEXT.PROFILE_TITLE.concat(currentUser.name ? ', '.concat(currentUser.name) : '')}!`}
      initialValues={{name: currentUser.name, email: currentUser.email}}
      headerComponent={<Header loggedIn={props.loggedIn} />}
      footerComponent={<FooterComponent />}
      className={'profile'}
      showName={true}
      showDivider={true}
      setValid={(value) => setValid(value)}
      setEditValues={(values) => setEditValues(values)}
    />
  );
}

Profile.propTypes = {
  loggedIn: PropTypes.bool,
  onLogout: PropTypes.func,
  onUpdateProfile: PropTypes.func,
};

export default withRouter(Profile);
