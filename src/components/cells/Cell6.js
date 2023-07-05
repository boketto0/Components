import './Cell6.css'
import { Checkbox } from '../checkbox/Checkbox'
import { CheckboxGroup } from '../checkbox/CheckboxGroup'

export const Cell6 = () => {

    const disabled = ''
    const text = ' '

    return(
        <div className='cell6'>
            {/* <CheckboxGroup>
                <Checkbox text={'Apple'}/>
                <Checkbox text={'Pear'}/>
                <Checkbox text={'Orange'}/>
            </CheckboxGroup> */}
            <Checkbox text={'Apple'}/>
            <Checkbox text={'Pear'}/>
            <Checkbox text={'Orange'}/>
            <Checkbox text={'Apple'}/>
            <Checkbox text={'Pear'}/>
            <Checkbox text={'Orange'}/>
            <Checkbox text={'Apple'} disabled />
            <Checkbox text={'Pear'} checked disabled />
            <Checkbox text={'Orange'} indeterminate disabled/>
        </div>
    )
}