
import React, { useState, useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import PageDescription from './PageDescription';
import { getInitialNumbersArray } from '../utils';
import NumberBox from './NumberBox';

import '../styles/NumberList.css';

function NumberList({ maxNumberLimit }) {
  const [numberList, setNumberList] = useState([]);
  const [selectedNumer, selectNumber] = useState(null);
  
  useEffect(() => setNumberList(getInitialNumbersArray(maxNumberLimit)), [maxNumberLimit]);

  const onClick = useCallback((selectedNum) => selectNumber(selectedNum),[]);
  const onKeyPress = useCallback((selectedNum, e) => {
    if(e.key === 'Enter' || e.keyCode === 13) {
      selectNumber(selectedNum) 
    }
    },[]);

  return (
    <>
    {selectedNumer &&<PageDescription>You have selected {selectedNumer}. Multiples of {selectedNumer}are highlighed in green color.</PageDescription> }
    <ol className="grid-container">
      {numberList.length > 0 && numberList.map(numberItem => (
        <NumberBox 
          key={numberItem}
          onClick={() => onClick(numberItem)}
          onKeyPress={(e) => onKeyPress(numberItem, e)}
          value={numberItem}
          isSelected={numberItem === selectedNumer}
          isMultipliable={selectedNumer ? selectedNumer % numberItem === 0 : false}
        />
      ))}
    </ol>
    </>
  );
}

NumberList.propTypes = {
  maxNumberLimit: PropTypes.number,
};

NumberList.defaultProps = {
  maxNumberLimit: 12,
}

export default NumberList;
