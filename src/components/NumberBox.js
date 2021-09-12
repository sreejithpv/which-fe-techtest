
import React from 'react';
import PropTypes from 'prop-types';

function NumberBox({ value, onClick, isSelected, isMultipliable }) {
  return (
    <li
      className={`grid-item ${isMultipliable ? 'active' : ''} ${isSelected ? 'selected' : ''}`}
      role="button" 
      onClick={onClick}>
      {value}
    </li>
  );
}

NumberBox.propTypes = {
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  isMultipliable: PropTypes.bool.isRequired,
};

export default React.memo(NumberBox);
