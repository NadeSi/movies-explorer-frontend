import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import {ReactComponent as CloseIcon} from '../../../images/close-icon.svg';
import Button from '../Button/Button';

import './CloseButton.css';

function CloseButton(props) {
  return (
    <Button className="close-button" onClick={props.onClose}>
      <CloseIcon />
    </Button>
  );
}

CloseButton.propTypes = {
  onClose: PropTypes.func,
};

export default CloseButton;
