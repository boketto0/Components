import './Cell3.css';
import { useState } from 'react';
import { Switch, SwitchSize } from '../Switch';

export const Cell3 = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleSwitch1Change = () => {
    setIsChecked1(!isChecked1);
  };

  const handleSwitch2Change = () => {
    setIsChecked2(!isChecked2);
  };

  return (
    <div className='cell3'>
      <div className='list'>
        <Switch
          size={SwitchSize.SMALL}
          onIcon={<span className='icon icon-right'>+</span>}
          offIcon={<span className='icon icon-left'>-</span>}
          checked={isChecked1}
          onChange={handleSwitch1Change}
        />
        <Switch
          size={SwitchSize.LARGE}
          onIcon={<span className='icon icon-right'>1</span>}
          offIcon={<span className='icon icon-left'>0</span>}
          checked={isChecked2}
          onChange={handleSwitch2Change}
        />
      </div>
      <div className='list'>
        <span>{isChecked1 ? 'On' : 'Off'}</span>
        <span>{isChecked2 ? 'On' : 'Off'}</span>
      </div>
    </div>
  );
};