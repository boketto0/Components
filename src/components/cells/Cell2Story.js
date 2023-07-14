import './Cell2Story.css'
import { Checkbox } from '../checkbox/Checkbox'

export const Cell2Story = () => {

    const disabled = ''

    return(
        <div className='cell1'>
            <Checkbox disabled />
            <Checkbox checked disabled />
            <Checkbox indeterminate disabled/>
        </div>
    )
}