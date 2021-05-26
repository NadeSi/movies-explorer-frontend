import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import './AboutProjectTable.css';

function AboutProjectTable(props) {
  const TableCell = (props) => {
    return (
      <div className={`table__cell ${props.className ? props.className : ''}`}>
        <p className={`table__cell-text ${props.textClassName ? props.textClassName : ''}`}>{props.text}</p>
      </div>
    );
  };

  TableCell.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
    textClassName: PropTypes.string,
  };

  return (
    <div className="about-project__table">
      <TableCell
        className={'table__cell_type_box table__cell_type_box-complementary'}
        textClassName={'table__cell-text_type_box'}
        text={'1 неделя'}
      />
      <TableCell className={'table__cell_type_box'} textClassName={'table__cell-text_type_box'} text={'4 недели'} />
      <TableCell className={'table__cell_type_text'} textClassName={'table__cell-text_type_text'} text={'Back-end'} />
      <TableCell className={'table__cell_type_text'} textClassName={'table__cell-text_type_text'} text={'Front-end'} />
    </div>
  );
}

AboutProjectTable.propTypes = {};

export default AboutProjectTable;
