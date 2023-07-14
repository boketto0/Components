import React, { useState } from 'react';
import { Switch, SwitchSize } from '../switch/Switch';
import './SwitchStory5.css';

export const SwitchStory5 = () => {
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
    </div>
  );
};