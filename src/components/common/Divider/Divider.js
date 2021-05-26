import React from 'react';
import PropTypes from 'prop-types';

import './Divider.css';

export const dividerType = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

function Divider(props) {
  return <div className={`divider ${props.type ? 'divider_'.concat(props.type) : ''}`} />;
}

Divider.propTypes = {
  type: PropTypes.oneOf([dividerType.PRIMARY, dividerType.SECONDARY]),
};

export default Divider;
