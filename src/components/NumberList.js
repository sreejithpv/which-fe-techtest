
import React, { useState, useCallback} from 'react';
import PropTypes from 'prop-types';

import { getNumberList } from '../utils';
import NumberBox from './NumberBox';

import '../styles/NumberList.css';

function NumberList({ maxNumberLimit }) {
  const [numberList, setNumberList] = useState(getNumberList({maxNumberLimit}));

  const selectNumber = (selectedNumber) => {
    const numList =getNumberList({
      maxNumberLimit,
      selectedNumber,
      numberList,
    })
    setNumberList([...numList]);
    };

  const onClick = useCallback((selectedNumber) => selectNumber(selectedNumber),[]);
  const onKeyPress = useCallback((selectedNumber, e) => { 
    if(e.keyCode === 13) { 
      selectNumber(selectedNumber) 
    }
    },[]);

  return (
    <ul className="grid-container">
      {numberList.map(numberItem => (
        <NumberBox 
          key={numberItem.value}
          onClick={() => !numberItem.isSelected ? onClick(numberItem.value): false}
          onKeyPress={(e) => !numberItem.isSelected ? onKeyPress(numberItem.value, e): false}
          value={numberItem.value}
          isSelected={numberItem.isSelected}
          isMultipliable={numberItem.isMultipliable}
        />
      ))}
    </ul>
  );
}

NumberList.propTypes = {
  maxNumberLimit: PropTypes.number,
};

NumberList.defaultProps = {
  maxNumberLimit: 12,
}

export default NumberList;
