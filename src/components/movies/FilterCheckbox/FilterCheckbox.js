import React from 'react';
import PropTypes from 'prop-types';

import './FilterCheckbox.css';

function FilterCheckbox(props) {
  return (
    <div className={`filter-checkbox ${props.className || ''}`}>
      <input className="filter-checkbox__slider" type="checkbox" id="filter-checkbox__slider" />
      <label htmlFor="filter-checkbox__slider" className={`filter-checkbox__label ${props.classNameLabel || ''}`}>
        {props.label || ''}
      </label>
    </div>
  );
}

FilterCheckbox.propTypes = {
  className: PropTypes.string,
  classNameLabel: PropTypes.string,
  label: PropTypes.string,
};

export default FilterCheckbox;
