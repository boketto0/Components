import { useCallback } from 'react';
import './Switch.css';
import { PropTypes } from 'prop-types';

export const SwitchSize = {
  SMALL: "small",
  LARGE: "large"
}

export const Switch = (props) => {

  const { checked, onChange, disabled, onIcon, offIcon, onClick, size = SwitchSize.LARGE } = props;

  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  const handleCheckboxChange = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  const switchClassnames = classnames(
    size && `switch-size`
  )

  return (
    <label className={`switch ${checked ? 'switch-on' : 'switch-off'}`}>
      <input type="checkbox" checked={checked} onChange={handleCheckboxChange} disabled={disabled} />
      <span className={`slider ${disabled ? 'slider-disabled' : ''}`}></span>
      <span className='switch-icon'>{checked ? onIcon : offIcon}</span>
    </label>
  );
};