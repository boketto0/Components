import './Cell3.css';
import Checkbox from '../checkbox/Checkbox';
import { useState, useEffect } from 'react';

export const Cell3 = () => {
  const [selectAllState, setSelectAllState] = useState('unchecked');
  const [checkboxesChecked, setCheckboxesChecked] = useState([]);

  const handleCheckboxChange = (checkboxValue) => {
    const updatedCheckboxes = [...checkboxesChecked];
    const checkboxIndex = updatedCheckboxes.indexOf(checkboxValue);

    if (checkboxIndex === -1) {
      updatedCheckboxes.push(checkboxValue);
    } else {
      updatedCheckboxes.splice(checkboxIndex, 1);
    }

    setCheckboxesChecked(updatedCheckboxes);
  };

  useEffect(() => {
    if (checkboxesChecked.length === 0) {
      setSelectAllState('unchecked');
    } else if (checkboxesChecked.length < 3) {
      setSelectAllState('indeterminate');
    } else {
      setSelectAllState('checked');
    }
  }, [checkboxesChecked]);

  const handleCheckAllChange = () => {
    if (selectAllState === 'unchecked' || selectAllState === 'indeterminate') {
      setCheckboxesChecked(['apple', 'pear', 'orange']);
      setSelectAllState('checked');
    } else {
      setCheckboxesChecked([]);
      setSelectAllState('unchecked');
    }
  };

  return (
    <div className="cell1">
      <Checkbox
        text="Check all"
        checked={selectAllState === 'checked'}
        indeterminate={selectAllState === 'indeterminate'}
        onChange={handleCheckAllChange}
      />
      <div className="list">
        <Checkbox
          text="Apple"
          checked={checkboxesChecked.includes('apple')}
          onChange={() => handleCheckboxChange('apple')}
        />
        <Checkbox
          text="Pear"
          checked={checkboxesChecked.includes('pear')}
          onChange={() => handleCheckboxChange('pear')}
        />
        <Checkbox
          text="Orange"
          checked={checkboxesChecked.includes('orange')}
          onChange={() => handleCheckboxChange('orange')}
        />
      </div>
    </div>
  );
};