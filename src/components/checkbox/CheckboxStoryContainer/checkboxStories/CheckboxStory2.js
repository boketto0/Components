import './CheckboxStory2.css'
import { Checkbox } from '../../Checkbox'
import React from 'react';

export const CheckboxStory2 = () => {

    const disabled = ''

    return(
        <div className='cell1'>
            <Checkbox disabled />
            <Checkbox checked disabled />
            <Checkbox indeterminate disabled/>
        </div>
    )
}