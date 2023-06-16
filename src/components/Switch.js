import React from 'react';
import './Switch.css';

export const Switch = (props) => {
    
  const { checked, onChange, disabled } = props;

  const handleCheckboxChange = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <label className={`switch ${checked ? 'switch-on' : 'switch-off'}`}>
      <input type="checkbox" checked={checked} onChange={handleCheckboxChange} disabled={disabled} />
      <span className={`slider ${disabled ? 'slider-disabled' : ''}`}></span>
    </label>
  );
};