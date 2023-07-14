import React, { useState } from 'react';
import './CheckboxStory5.css';
import { Checkbox } from '../checkbox';
import { Button, ButtonType, ButtonSize } from '../button/Button';

export const CheckboxStory5 = () => {
  const size = ButtonSize.SMALL;
  const type = ButtonType.PRIMARY;

  const [isChecked, setIsChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [buttonText, setButtonText] = useState('Check');
  const [checkboxText, setCheckboxText] = useState('Unchecked-Enabled');

  const handleCheckboxChange = (checked) => {
    setIsChecked(checked);
    setButtonText(checked ? 'Uncheck' : 'Check');
    setCheckboxText(getCheckboxText(checked, isDisabled));
  };

  const handleButtonClick = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    setButtonText(newChecked ? 'Uncheck' : 'Check');
    setCheckboxText(getCheckboxText(newChecked, isDisabled));
  };

  const handleDisableClick = () => {
    const newDisabled = !isDisabled;
    setIsDisabled(newDisabled);
    setCheckboxText(getCheckboxText(isChecked, newDisabled));
  };

  const getCheckboxText = (checked, disabled) => {
    if (checked && disabled) {
      return 'Checked-Disabled';
    } else if (checked && !disabled) {
      return 'Checked-Enabled';
    } else if (!checked && disabled) {
      return 'Unchecked-Disabled';
    } else {
      return 'Unchecked-Enabled';
    }
  };

  return (
    <div className="cell5">
      <Checkbox
        text={checkboxText}
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