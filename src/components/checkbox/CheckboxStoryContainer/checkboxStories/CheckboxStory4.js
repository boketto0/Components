import './CheckboxStory4.css'
import { Checkbox } from '../../Checkbox'
import React from 'react';

export const CheckboxStory4 = () => {

    return(
        <div className='cell4'>
            <Checkbox text={'A'}/>
            <Checkbox text={'B'}/>
            <Checkbox text={'C'}/>
            <Checkbox text={'D'}/>
            <Checkbox text={'E'}/>
        </div>
    )
}