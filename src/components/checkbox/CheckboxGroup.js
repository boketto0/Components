import React, { useState, useEffect } from 'react';
import { Checkbox } from '.';
import './CheckboxGroup.css';

export const CheckboxGroup = ({ children }) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isIndeterminate, setIsIndeterminate] = useState(false);
  /**
   * TODO: Добавить логику с indeterminate
   */

  /** Инициализация массива checkedItems */
  useEffect(() => {
    const allValues = React.Children.map(children, (child) => {
      if (!child.props.checked) {
        return false;
      }

      return true;
    });

    setCheckedItems([...allValues]);
  }, [React.Children.count(children)]);


  /** доделать indeterminate */
  const handleCheckboxChange = (index) => (isChecked) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = isChecked;

    const isCheckAllNew = newCheckedItems.reduce((acc, value) => {
      return acc && value;
    }, true);

    setCheckedItems(newCheckedItems);
    setIsCheckAll(isCheckAllNew);
  };

  /**
   * Доделать обработку родительского чекбокса
   * Меняешь checkedItems
   * и меняешь checked 
   */
  const handleCheckAllChange = (isChecked) => {
    if (isChecked) {
      const allValues = React.Children.map(children, (child) => child.props.value);
      //setCheckedItems(allValues);
      setIsCheckAll(true);
    } else {
      //setCheckedItems([]);
      setIsCheckAll(false);
    }
  };

  return (
    <div className="checkbox-group">
      <div>
        <Checkbox
          text="Check all"
          checked={isCheckAll}
          onChange={handleCheckAllChange}
        />
      </div>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          checked: checkedItems[index],
          onChange: handleCheckboxChange(index),
        })
      )}
    </div>
  );
};