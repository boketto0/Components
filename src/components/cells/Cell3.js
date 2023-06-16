import './Cell3.css';
import Checkbox from '../Checkbox';
import { useState, useEffect } from 'react';

export const Cell3 = () => {
  const [selectAllChecked, setSelectAllChecked] = useState(false);
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
    setSelectAllChecked(checkboxesChecked.length === 3);
  }, [checkboxesChecked]);

  const handleCheckAllChange = (checked) => {
    if (checked) {
      setCheckboxesChecked(['apple', 'pear', 'orange']);
    } else {
      setCheckboxesChecked([]);
    }
  };

  return (
    <div className="cell1">
      <Checkbox
        text="Check all"
        checked={selectAllChecked}
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