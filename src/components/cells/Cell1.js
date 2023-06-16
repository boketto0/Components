import './Cell1.css'
import { useState } from 'react'
import { Switch } from '../Switch';

export const Cell1 = () => {

    const [isChecked, setIsChecked] = useState(false);

    const handleSwitchChange = () => {
        setIsChecked(!isChecked)
    }

    return (
        <div>
            <Switch checked={isChecked} onChange={handleSwitchChange}/>
            <span>{isChecked ? 'On' : 'Off'}</span>
        </div>
    )
}