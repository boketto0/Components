import React, { useState, useEffect } from 'react';
import Checkbox from '../checkbox/Checkbox';
import CheckboxGroup from '../checkbox/CheckboxGroup';
import './Cell3.css';

export const Cell3 = () => {
  const [checkboxesChecked, setCheckboxesChecked] = useState([]);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);

  useEffect(() => {
    handleCheckAll();
  }, [checkboxesChecked]);

  const handleCheckboxChange = (value, isChecked) => {
    let updatedCheckboxesChecked = [...checkboxesChecked];

    if (isChecked) {
      updatedCheckboxesChecked.push(value);
    } else {
      updatedCheckboxesChecked = updatedCheckboxesChecked.filter((item) => item !== value);
    }

    setCheckboxesChecked(updatedCheckboxesChecked);
  };

  const handleCheckAllChange = (isChecked) => {
    setIsCheckAll(isChecked);
    setIndeterminate(false);

    if (isChecked) {
      const allValues = ['A', 'B', 'C', 'D'];
      setCheckboxesChecked(allValues);
    } else {
      setCheckboxesChecked([]);
    }
  };

  const handleCheckAll = () => {
    if (checkboxesChecked.length === 0) {
      setIsCheckAll(false);
      setIndeterminate(false);
      return;
    }

    const allValues = ['A', 'B', 'C', 'D'];
    const isAllChecked = allValues.every((value) => checkboxesChecked.includes(value));
    const isSomeChecked = checkboxesChecked.some((value) => !allValues.includes(value));

    if (isAllChecked) {
      setIsCheckAll(true);
      setIndeterminate(false);
    } else if (isSomeChecked) {
      setIsCheckAll(false);
      setIndeterminate(true);
    } else {
      setIsCheckAll(false);
      setIndeterminate(false);
    }
  };

  return (
    <div className="cell3">
      <CheckboxGroup>
        <Checkbox
          value="A"
          text="Checkbox A"
          checked={checkboxesChecked.includes('A')}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          value="B"
          text="Checkbox B"
          checked={checkboxesChecked.includes('B')}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          value="C"
          text="Checkbox C"
          checked={checkboxesChecked.includes('C')}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          value="D"
          text="Checkbox D"
          checked={checkboxesChecked.includes('D')}
          onChange={handleCheckboxChange}
        />
      </CheckboxGroup>
    </div>
  );
};

export default Cell3;