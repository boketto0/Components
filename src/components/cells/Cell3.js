import React, { useState } from 'react';
import { Switch } from '../Switch';

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
      {isChecked ? <span>On</span> : <span>Off</span>}
    </div>
  );
};