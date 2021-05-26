import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useHistory, withRouter} from 'react-router-dom';

import Divider, {dividerType} from '../../common/Divider/Divider';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import {ReactComponent as SearchIcon} from '../../../images/search-icon.svg';

import './SearchForm.css';
import Button from '../../common/Button/Button';

function SearchForm(props) {
  return (
    <section className="section search-form">
      <form className="section__content">
        <div className="search-form__search-line">
          <input className="search-form__input" type="text" placeholder="Фильм" />
          <Button className="search-form__button">
            <SearchIcon />
          </Button>
        </div>
        <Divider type={dividerType.SECONDARY} />
        <FilterCheckbox className="search-form__checkbox" label={'Короткометражки'} />
      </form>
    </section>
  );
}

SearchForm.propTypes = {
  // loggedIn: PropTypes.bool,
};

export default SearchForm;
