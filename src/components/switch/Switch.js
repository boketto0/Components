import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import './Switch.css';
import classnames from 'classnames';

export const SwitchSize = {
  SMALL: 'small',
  LARGE: 'large'
};

export const Switch = (props) => {
  const { checked, onChange, disabled, onIcon, offIcon, onClick, size = SwitchSize.LARGE, loading } = props;

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

  const sliderClassName = classnames('slider', {
    'slider-small': size === SwitchSize.SMALL,
    'slider-large': size === SwitchSize.LARGE,
    'slider-disabled': disabled,
    'slider-loading': loading
  });

  return (
    <label
      className={`switch switch-${size} ${checked ? 'switch-on' : 'switch-off'} ${isDragging ? 'slider-dragging' : ''}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <input type="checkbox" checked={checked} onChange={handleCheckboxChange} disabled={disabled} />
      <div className={sliderClassName}>
        {checked ? onIcon : offIcon}
        <div className='container'>
        </div>
      </div>
    </label>
  );
};

Switch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(SwitchSize)),
  onIcon: PropTypes.node,
  offIcon: PropTypes.node
};