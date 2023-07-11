import React, { useState } from 'react';
import { Switch, SwitchSize } from '../Switch';
import './Cell5.css';

export const Cell5 = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <Switch
        size={SwitchSize.LARGE}
        checked={isChecked}
        onChange={handleSwitchChange}
        loading={isLoading}
        onClick={() => setIsLoading(!isLoading)}
      />
    </div>
  );
};