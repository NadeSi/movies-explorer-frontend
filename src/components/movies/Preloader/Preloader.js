import React from 'react';
import PropTypes from 'prop-types';

import './Preloader.css';

const Preloader = (props) => {
  return (
    <div className={'preloader'.concat(props.isLoading ? ' preloader_visible' : '')}>
      <div className="preloader__container">
        <span className="preloader__round" />
      </div>
    </div>
  );
};

Preloader.propTypes = {
  isLoading: PropTypes.bool,
};

export default Preloader;
