import React, { useState, useEffect } from 'react';
import { Checkbox } from '.';
import { PropTypes } from 'prop-types';

export const CheckboxGroup = ({ children }) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isIndeterminate, setIsIndeterminate] = useState(false);

  useEffect(() => {
    handleCheckAll();
    handleIndeterminate();
  }, [checkedItems]);

  useEffect(() => {
    const allValues = React.Children.map(children, (child) => child.props.checked || false);
    setCheckedItems(allValues);
  }, [children]);

  const handleCheckboxChange = (index) => (isChecked) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = isChecked;

    setCheckedItems(newCheckedItems);
    setIsCheckAll(newCheckedItems.reduce((acc, item) => acc && item, true));
    setIsIndeterminate(
      newCheckedItems.reduce((acc, item) => acc || item, false) &&
        !newCheckedItems.reduce((acc, item) => acc && item, true)
    );
  };

  const handleCheckAllChange = (isChecked) => {
    const newCheckedItems = Array(children.length).fill(isChecked);

    setCheckedItems(newCheckedItems);
    setIsCheckAll(isChecked);
    setIsIndeterminate(false);
  };

  const handleCheckAll = () => {
    setIsCheckAll(checkedItems.reduce((acc, item) => acc && item, true));
    setIsIndeterminate(
      checkedItems.reduce((acc, item) => acc || item, false) &&
        !checkedItems.reduce((acc, item) => acc && item, true)
    );
  };

  const handleIndeterminate = () => {
    setIsIndeterminate(
      checkedItems.reduce((acc, item) => acc || item, false) &&
        !checkedItems.reduce((acc, item) => acc && item, true)
    );
  };

  return (
    <div className="checkbox-group">
      <div>
        <Checkbox
          text="Check all"
          checked={isCheckAll}
          indeterminate={isIndeterminate}
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

CheckboxGroup.propTypes = {
  children: PropTypes.node
}