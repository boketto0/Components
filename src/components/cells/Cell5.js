import React, { useState } from 'react';
import { Switch, SwitchSize } from '../Switch';
import './Cell5.css';

export const Cell5 = () => {
  const [isChecked, ] = useState(false);

  return (
    <div className='list'>
      <Switch
        size={SwitchSize.LARGE}
        checked={isChecked}
        loading={true}
        disabled
      />
      <Switch
        size={SwitchSize.LARGE}
        checked={!isChecked}
        loading={true}
        disabled
      />
       <Switch
        size={SwitchSize.SMALL}
        checked={!isChecked}
        loading={true}
        disabled
      />
    </div>
  );
};