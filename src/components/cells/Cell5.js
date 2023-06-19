import CheckboxGroup from '../checkbox/Checkboxgroup';
import { Button, ButtonType, ButtonSize } from '../button/Button';
import { useState } from 'react';
import Checkbox from '../checkbox/Checkbox';

export const Cell5 = () => {
  const size = ButtonSize.SMALL;
  const type = ButtonType.PRIMARY;

  const [isChecked, setIsChecked] = useState(false);
  const [buttonText, setButtonText] = useState('Check');

  const handleCheckboxChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    setButtonText(newChecked ? 'Uncheck' : 'Check');
  };

  const handleButtonClick = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    setButtonText(newChecked ? 'Uncheck' : 'Check');
  };

  return (
    <div className="cell5">
      <CheckboxGroup>
        <Checkbox
          value="checkbox1"
          text={isChecked ? 'Checked-Enabled' : 'Unchecked-Enabled'}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </CheckboxGroup>
      <div className="list">
        <Button size={size} type={type} text={buttonText} onClick={handleButtonClick} />
        <Button size={size} type={type} text="Disable" onClick={() => setIsChecked(false)} />
      </div>
    </div>
  );
};