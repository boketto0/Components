import React, { useState, useCallback } from 'react';
import classnames from 'classnames';
import './Checkbox.css';

export const Checkbox = (props) => {
  const { text, disabled, indeterminate, checked: checkedProps, onChange, onClick } = props;

  const [checkedState, setCheckedState] = useState(checkedProps || false);

  const handleCheckboxChange = (e) => {
    let newChecked = e.currentTarget.checked;

    if (!disabled) {
      if (checkedProps === undefined) {
        setCheckedState(newChecked);
      }

      if (onChange) {
        onChange(newChecked);
      }
    }
  };

  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  const checked = checkedProps || indeterminate ||  checkedState;

  const checkboxClasses = classnames('checkbox', {
    'checkbox-disabled': disabled,
  });

  const checkmarkClasses = classnames('checkmark', {
    'checkmark-disabled': disabled,
    'checkmark-indeterminate': indeterminate,
    'checkmark-indeterminate-disabled': indeterminate && disabled,
  });

  return (
    <label className={checkboxClasses} onClick={handleClick}>
      <input type="checkbox" checked={checked} onChange={handleCheckboxChange} disabled={disabled} />
      <span className={checkmarkClasses}></span>
      {text && <span className="label">{text}</span>}
    </label>
  );
};
