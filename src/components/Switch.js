import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import './Switch.css';

export const SwitchSize = {
  SMALL: 'small',
  LARGE: 'large'
};

export const Switch = ({ checked, onChange, disabled, onIcon, offIcon, size = SwitchSize.LARGE }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleCheckboxChange = useCallback(() => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  }, [disabled, checked, onChange]);

  const handleMouseDown = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <label className={`switch switch-${size} ${checked ? 'switch-on' : 'switch-off'} ${isDragging ? 'slider-dragging' : ''}`}>
      <input type="checkbox" checked={checked} onChange={handleCheckboxChange} disabled={disabled} />
      <span className={`slider slider-${size} ${disabled ? 'slider-disabled' : ''}`} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}></span>
      <span className="switch-icon">{checked ? onIcon : offIcon}</span>
    </label>
  );
};

Switch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  onIcon: PropTypes.node,
  offIcon: PropTypes.node,
  size: PropTypes.oneOf(Object.values(SwitchSize))
};