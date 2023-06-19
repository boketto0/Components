import Checkbox from './Checkbox';
import './CheckboxGroup.css';
import { useEffect } from 'react';
import { useState } from 'react';
import React from 'react';

const CheckboxGroup = ({ children }) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [indeterminate, setIndeterminate] = useState(false);

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
  };

  const handleCheckAll = () => {
    if (checkedItems.length === 0 || checkedItems.length === React.Children.count(children)) {
      setIndeterminate(false);
    } else {
      setIndeterminate(true);
    }
  };

  const handleCheckAllChange = (isChecked) => {
    if (isChecked) {
      const allValues = React.Children.map(children, (child) => child.props.value);
      setCheckedItems(allValues);
    } else {
      setCheckedItems([]);
    }
  };

  return (
    <div className="checkbox-group">
      <Checkbox
        text="Check All"
        checked={checkedItems.length === React.Children.count(children)}
        indeterminate={indeterminate}
        onChange={handleCheckAllChange}
      />
      <div className="checkbox-group-items">
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            checked: checkedItems.includes(child.props.value),
            onChange: handleCheckboxChange,
          })
        )}
      </div>
    </div>
  );
};

export default CheckboxGroup;