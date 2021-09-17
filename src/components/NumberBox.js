
import React from 'react';
import PropTypes from 'prop-types';

function NumberBox({ value, onClick, onKeyPress, isSelected, isMultipliable }) {
  return (
    <li
      tabIndex="0"
      className={`grid-item ${isMultipliable ? 'active' : ''} ${isSelected ? 'selected' : ''}`}
      role="button" 
      onClick={onClick}
      onKeyDown={onKeyPress}
      aria-selected={isSelected}
    >
      {value}
    </li>
  );
}

NumberBox.propTypes = {
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  isMultipliable: PropTypes.bool.isRequired,
};

export default React.memo(NumberBox);
