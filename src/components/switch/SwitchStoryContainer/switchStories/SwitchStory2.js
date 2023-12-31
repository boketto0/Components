import React, { useState } from 'react';
import './SwitchStory2.css';
import { Switch, SwitchSize } from '../../Switch';
import { Button, ButtonType, ButtonSize } from '../../../button/Button';

export function SwitchStory2() {
  const [isChecked, setIsChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
  };

  const handleDisableButtonClick = () => {
    setIsDisabled(!isDisabled);
  };

  const size = '';

  return (
    <div>
      <Switch size={SwitchSize.LARGE} checked={isChecked} onChange={handleSwitchChange} disabled={isDisabled} />
      <span>{isChecked ? 'On' : 'Off'}</span>
      <Button
        colored="pressed"
        type={ButtonType.PRIMARY}
        size={ButtonSize.SMALL}
        text={isDisabled ? 'Enable' : 'Disable'}
        onClick={handleDisableButtonClick}
      />
    </div>
  );
}
