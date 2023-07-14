import './Cell4Story.css'
import { Checkbox } from '../checkbox/Checkbox'

export const Cell4Story = () => {

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