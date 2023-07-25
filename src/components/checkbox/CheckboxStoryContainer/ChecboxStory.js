import './CheckboxStory.css'
import { CheckboxStory1, CheckboxStory2, CheckboxStory3, CheckboxStory4, CheckboxStory5, CheckboxStory6 } from './checkboxStories/index'
import { Card, CardType } from '../../cards/Card'
import { CardWrapper } from '../../cards/CardWrapper'

export const CheckboxStory = () => {

    const elements = [
        {
            cell: <CheckboxStory1/>,
            title: 'Basic',
            text: 'Basic usage of checkbox.'
        },
        {
            cell: <CheckboxStory2/>,
            title: 'Disabled',
            text: 'Disabled checkbox.'
        },
        {
            cell: <CheckboxStory3/>,
            title: 'Check all',
            text: 'Check all checkbox.'
        },
        {
            cell: <CheckboxStory4/>,
            title: 'Use with Grid',
            text: 'We can use Checkbox and Grid to implement complex layout.'
        },
        {
            cell: <CheckboxStory5/>,
            title: 'Controlled Checkbox',
            text: 'Communicated with other components.'
        },
        {
            cell: <CheckboxStory6/>,
            title: 'Checkbox Group',
            text: 'Generate a group of checkboxes from an array.'
        }
    ]

    return (
        <div className='checkbox-wrapper'>
            <div className='checkbox-list'>
                <div className='par-1'>Checkbox</div>
                <div className='text1'>Checkbox component.</div>
                <div className='par-2'>Examples</div>
            </div>
            <div>
                <CardWrapper>
                { elements.map((el) => {
                    return(
                    <div>
                        <Card cardType={CardType.FIRST} cell={el.cell} title={el.title} text={el.text}/>
                    </div>
                    )
                })}
                </CardWrapper>
            </div>
        </div>
    )
}