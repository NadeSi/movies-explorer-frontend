import React from 'react';
import PropTypes from 'prop-types';

import {ReactComponent as SearchIcon} from '../../../images/search-icon.svg';
import Divider, {dividerType} from '../../common/Divider/Divider';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Button from '../../common/Button/Button';

import {COMPONENTS_TEXT} from '../../../utils/const/components-text';

import './SearchForm.css';

function SearchForm(props) {
  const handleChangeSearchKey = (e) => {
    props.onChangeSearchKey && props.onChangeSearchKey(e.target.value);
  };

  const handleChangeShortFilm = (value) => {
    props.onChangeShortFilm && props.onChangeShortFilm(value);
  };

  const handleSubmit = () => {
    props.onSearchMovies && props.onSearchMovies();
  };

  return (
    <section className="section search-form">
      <form className="section__content">
        <div className="search-form__search-line">
          <input
            className="search-form__input"
            type="text"
            placeholder={COMPONENTS_TEXT.MOVIE}
            required
            value={props.searchKey}
            onChange={handleChangeSearchKey}
          />
          <Button className="search-form__button" onClick={handleSubmit}>
            <SearchIcon />
          </Button>
        </div>
        <Divider type={dividerType.SECONDARY} />
        <FilterCheckbox
          className="search-form__checkbox"
          label={COMPONENTS_TEXT.SHORT_FILM}
          checked={props.isShortFilm}
          onChange={handleChangeShortFilm}
        />
      </form>
    </section>
  );
}

SearchForm.propTypes = {
  searchKey: PropTypes.string,
  isShortFilm: PropTypes.bool,
  onChangeSearchKey: PropTypes.func,
  onChangeShortFilm: PropTypes.func,
  onSearchMovies: PropTypes.func,
};

export default SearchForm;
