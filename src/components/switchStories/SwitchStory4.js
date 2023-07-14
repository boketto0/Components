import './SwitchStory4.css'
import { useState } from 'react'
import { Switch, SwitchSize } from '../switch/Switch';

export const SwitchStory4 = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleSwitch1Change = () => {
    setIsChecked1(!isChecked1);
  };

  const handleSwitch2Change = () => {
    setIsChecked2(!isChecked2);
  };

    return (
        <div className='list'>
            <Switch size={SwitchSize.SMALL} checked={isChecked1} onChange={handleSwitch1Change}/>
            <Switch size={SwitchSize.LARGE} checked={isChecked2} onChange={handleSwitch2Change}/>
        </div>
    )
}