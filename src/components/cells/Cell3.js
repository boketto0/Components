import './Cell3.css';
import { useState } from 'react';
import { Switch, SwitchSize } from '../Switch';

export const Cell3 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <Switch
        onIcon={<span>+</span>}
        offIcon={<span>-</span>}
        checked={isChecked}
        onChange={handleSwitchChange}
      />
      <span>{isChecked ? 'On' : 'Off'}</span>
    </div>
  );
};