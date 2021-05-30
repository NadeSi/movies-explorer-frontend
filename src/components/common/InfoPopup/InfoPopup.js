import React from 'react';
import PropTypes from 'prop-types';

import CloseButton from '../CloseButton/CloseButton';

import {MESSAGES} from '../../../utils/const/messages';

import './InfoPopup.css';

function InfoPopup(props) {
  const {isOpen, text = MESSAGES.ERROR} = props;

  return (
    <div className={`popup ${isOpen && 'popup_opened'}`}>
      <div className="popup__container info-tooltip">
        <CloseButton onClose={props.onClose} />
        <p className="popup__header info-tooltip__text">{text}</p>
      </div>
    </div>
  );
}

InfoPopup.propTypes = {
  isOpen: PropTypes.bool,
  text: PropTypes.string,
  onClose: PropTypes.func,
};

export default InfoPopup;
