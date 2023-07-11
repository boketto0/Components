import React, { useState } from 'react';
import { Switch, SwitchSize } from '../Switch';
import './Cell5.css';

export const Cell5 = () => {
  const [isChecked, ] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='list'>
      <Switch
        size={SwitchSize.LARGE}
        checked={isChecked}
        loading={isLoading}
        onClick={() => setIsLoading(!isLoading)}
        disabled
      />
      <Switch
        size={SwitchSize.LARGE}
        checked={!isChecked}
        loading={isLoading}
        onClick={() => setIsLoading(!isLoading)}
        disabled
      />
       <Switch
        size={SwitchSize.SMALL}
        checked={!isChecked}
        loading={isLoading}
        onClick={() => setIsLoading(!isLoading)}
        disabled
      />
    </div>
  );
};