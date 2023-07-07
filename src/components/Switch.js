import React, { useState, useCallback } from 'react';
import './Switch.css';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const SwitchSize = {
  SMALL: 'small',
  LARGE: 'large'
};

export const Switch = (props) => {
  const { checked, onChange, disabled, onIcon, offIcon, onClick, size = SwitchSize.LARGE } = props;
  const [isDragging, setIsDragging] = useState(false);

  const handleClick = useCallback(() => {
    if (!disabled && onClick) {
      onClick();
    }
  }, [disabled, onClick]);

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
    <label
      className={classnames('switch', { 'switch-on': checked, 'switch-off': !checked })}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        disabled={disabled}
      />
      <span className={classnames('slider', { 'slider-dragging': isDragging })}>
        {checked ? onIcon : offIcon}
      </span>
    </label>
  );
};

Switch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  onIcon: PropTypes.node,
  offIcon: PropTypes.node,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(Object.values(SwitchSize))
};