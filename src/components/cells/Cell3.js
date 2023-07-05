import './Cell3.css'
import { useState } from 'react'
import { Switch } from '../Switch'

export const Cell3 = () => {

    const [isChecked, setIsChecked] = useState(false);

    const handleSwitchChange = () => {
        setIsChecked(!isChecked)
    }

    return (
        <div>
            <Switch onIcon={'+'} offIcon={'-'} checked={isChecked} onChange={handleSwitchChange}/>
            <span>{isChecked ? 'On' : 'Off'}</span>
        </div>
    )

}