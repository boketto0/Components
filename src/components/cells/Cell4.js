import './Cell4.css'
import { useState } from 'react'
import { Switch, SwitchSize } from '../Switch';

export const Cell4 = () => {

    const [isChecked, setIsChecked] = useState(false);
    
    const size = ''

    const handleSwitchChange = () => {
        setIsChecked(!isChecked)
    }

    return (
        <div>
            <Switch size={SwitchSize.SMALL} checked={isChecked} onChange={handleSwitchChange}/>
            <Switch size={SwitchSize.LARGE} checked={isChecked} onChange={handleSwitchChange}/>
        </div>
    )
}