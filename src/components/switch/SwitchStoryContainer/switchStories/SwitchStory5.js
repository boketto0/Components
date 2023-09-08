import React, { useState } from 'react';
import { Switch, SwitchSize } from '../../Switch';
import './SwitchStory5.css';

export function SwitchStory5() {
  const [isChecked] = useState(false);

  return (
    <div className="list">
      <Switch
        size={SwitchSize.LARGE}
        checked={isChecked}
        loading
        disabled
      />
      <Switch
        size={SwitchSize.LARGE}
        checked={!isChecked}
        loading
        disabled
      />
    </div>
  );
}
