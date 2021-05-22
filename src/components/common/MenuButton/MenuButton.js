import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import {ReactComponent as MenuIcon} from '../../../images/menu-icon.svg';
import Button from '../Button/Button';
import Sidebar from '../Sidebar/Sidebar';

import './MenuButton.css';

function MenuButton(props) {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleClickButton = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <Button
        className={`button_type_text-only menu-button ${props.className ? props.className : ''}`}
        onClick={handleClickButton}>
        <MenuIcon />
      </Button>
      {isOpen && <Sidebar isOpen={isOpen} onClose={handleClickButton} />}
    </>
  );
}

MenuButton.propTypes = {
  className: PropTypes.string,
};

export default MenuButton;
