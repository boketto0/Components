import React from 'react';
import classnames from 'classnames';
import './Checkbox.css';

const Checkbox = (props) => {
  const { text, disabled, checked, indeterminate, onChange } = props;

  const handleCheckboxChange = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  const checkboxClasses = classnames('checkbox', {
    'checkbox-disabled': disabled,
  });

  const checkmarkClasses = classnames('checkmark', {
    'checkmark-disabled': disabled,
    'checkmark-indeterminate': indeterminate,
  });

  return (
    <label className={checkboxClasses}>
      <input type="checkbox" checked={checked} onChange={handleCheckboxChange} disabled={disabled} />
      <span className={checkmarkClasses}></span>
      {text && <span className="label">{text}</span>}
    </label>
  );
};

export default Checkbox;