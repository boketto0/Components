import React, { useState } from 'react';
import './Cell5.css';
import { Checkbox } from '../checkbox/Checkbox'
import { Button, ButtonType, ButtonSize } from '../button/Button';

export const Cell5 = () => {
  const size = ButtonSize.SMALL;
  const type = ButtonType.PRIMARY;

  const [isChecked, setIsChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [buttonText, setButtonText] = useState('Check');
  const [checkboxText, setCheckboxText] = useState('Unchecked-Enabled');

  const handleCheckboxChange = (checked) => {
    setIsChecked(checked);
    setButtonText(checked ? 'Uncheck' : 'Check');
  };

  const handleButtonClick = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    setButtonText(newChecked ? 'Uncheck' : 'Check');
  };

  const handleDisableClick = () => {
    setIsDisabled(!isDisabled);
    setCheckboxText(isDisabled ? 'Unchecked-Enabled' : 'Unchecked-Disabled');
  };

  return (
    <div className="cell5">
      <Checkbox
        text={isChecked ? 'Checked-Enabled' : checkboxText}
        checked={isChecked}
        disabled={isDisabled}
        onChange={handleCheckboxChange}
      />
      <div className="list">
        <Button size={size} type={type} text={buttonText} onClick={handleButtonClick} />
        <Button size={size} type={type} text={isDisabled ? 'Enabled' : 'Disable'} onClick={handleDisableClick} />
      </div>
    </div>
  );
};