import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import './Switch.css';
import classnames from 'classnames'

export const SwitchSize = {
  SMALL: 'small',
  LARGE: 'large'
};

export const Switch = (props) => {
  const { checked, onChange, disabled, onIcon, offIcon, onClick, size = SwitchSize.LARGE } = props;

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

  // const handleSwitchClick = useCallback(() => {
  //   if (!disabled && onChange) {
  //     onChange(!checked);
  //   }
  // }, [disabled, checked, onChange]);

  return (
    <label
      className={`switch switch-${size} ${checked ? 'switch-on' : 'switch-off'} ${isDragging ? 'slider-dragging' : ''}`}
      onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
      <input type="checkbox" checked={checked} onChange={handleCheckboxChange} disabled={disabled} />
      <span className={`slider slider-${size} ${disabled ? 'slider-disabled' : ''}`}></span>
      {/* <span className={classnames('slider', { 'slider-dragging': isDragging })}>
        {checked ? onIcon : offIcon}
      </span> */}
    </label>
  );
};

Switch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(SwitchSize))
};