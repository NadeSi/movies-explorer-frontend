import React from 'react';
import PropTypes from 'prop-types';

import './FilterCheckbox.css';

function FilterCheckbox(props) {
  const handleChangeFilterCheckbox = (e) => {
    props.onChange && props.onChange(e.target.checked);
  };

  return (
    <div className={`filter-checkbox ${props.className || ''}`}>
      <input
        className="filter-checkbox__slider"
        type="checkbox"
        id="filter-checkbox__slider"
        checked={props.checked}
        onChange={handleChangeFilterCheckbox}
      />
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
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default FilterCheckbox;
