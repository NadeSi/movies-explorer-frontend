import React from 'react';
import PropTypes from 'prop-types';

import './TechsCard.css';

function TechsCard(props) {
  return (
    <div className="techs__card">
      <span className="techs__card-text">{props.text}</span>
    </div>
  );
}

TechsCard.propTypes = {
  text: PropTypes.string,
};

export default TechsCard;
