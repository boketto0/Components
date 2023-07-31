import './SwitchStory1.css'
import { useState } from 'react'
import { Switch, SwitchSize } from '../../Switch';
import React from 'react';

export const SwitchStory1 = () => {

    const [isChecked, setIsChecked] = useState(false);

    const size = ''

    const handleSwitchChange = () => {
        setIsChecked(!isChecked)
    }

    return (
        <div>
            <Switch size={SwitchSize.LARGE} checked={isChecked} onChange={handleSwitchChange}/>
        </div>
    )
}