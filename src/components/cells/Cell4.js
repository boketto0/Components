import './Cell4.css'
import { useState } from 'react'
import { Switch, SwitchSize } from '../Switch';

export const Cell4 = () => {

    const [isChecked, setIsChecked] = useState(false);
    
    const sixe = ''

    const handleSwitchChange = () => {
        setIsChecked(!isChecked)
    }

    return (
        <div>
            <Switch checked={isChecked} onChange={handleSwitchChange}/>
            <Switch size={SwitchSize.LARGE} checked={isChecked} onChange={handleSwitchChange}/>
        </div>
    )
}