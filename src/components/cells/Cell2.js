import './Cell2.css'
import { Checkbox } from '../checkbox'

export const Cell2 = () => {

    const disabled = ''

    return(
        <div className='cell1'>
            <Checkbox disabled />
            <Checkbox checked disabled />
            <Checkbox indeterminate disabled/>
        </div>
    )
}