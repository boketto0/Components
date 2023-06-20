import React, { useState, useEffect } from 'react';
import Checkbox from './Checkbox';
import './CheckboxGroup.css';

export const CheckboxGroup = ({ children }) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [isCheckAll, setIsCheckAll] = useState(false);

  useEffect(() => {
    handleCheckAll();
  }, [checkedItems]);

  const handleCheckboxChange = (value, isChecked) => {
    let updatedCheckedItems = [...checkedItems];

    if (isChecked) {
      updatedCheckedItems.push(value);
    } else {
      updatedCheckedItems = updatedCheckedItems.filter((item) => item !== value);
    }

    setCheckedItems(updatedCheckedItems);
    setIsCheckAll(updatedCheckedItems.length === React.Children.count(children));
  };

  const handleCheckAll = () => {
    const allValues = React.Children.map(children, (child) => child.props.value);
    const isAllChecked = allValues.length > 0 && allValues.every((value) => checkedItems.includes(value));

    setIsCheckAll(isAllChecked);
  };

  const handleCheckAllChange = (isChecked) => {
    if (isChecked) {
      const allValues = React.Children.map(children, (child) => child.props.value);
      setCheckedItems(allValues);
      setIsCheckAll(true);
    } else {
      setCheckedItems([]);
      setIsCheckAll(false);
    }
  };

  return (
    <div className="checkbox-group">
      <Checkbox
        text="Check all"
        checked={isCheckAll}
        onChange={handleCheckAllChange}
      />
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          checked: checkedItems.includes(child.props.value),
          onChange: handleCheckboxChange,
        })
      )}
    </div>
  );
};

export default CheckboxGroup;