import './Cell5.css';
import Checkbox from '../Checkbox';
import { useState } from 'react';
import { Button, ButtonType, ButtonSize } from '../button/Button';

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
      <Checkbox
        text={isChecked ? 'Checked-Enabled' : 'Unchecked-Enabled'}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <div className="list">
        <Button size={size} type={type} text={buttonText} onClick={handleButtonClick} />
        <Button size={size} type={type} text="Disable" onClick={() => setIsChecked(false)} />
      </div>
    </div>
  );
};