import './ButtonStory.css'
import { Card, CardType } from '../cards/Card'
import { CardWrapper } from '../cards/CardWrapper'
import { ButtonList1, ButtonList2, ButtonList3, ButtonList4, ButtonList5, ButtonPreview  } from '../buttonList/index'

export const ButtonStory = () => {

    const elements = [
        {
            cell: <ButtonList1/>,
            title: 'Basic',
            text: 'Basic usage of checkbox.'
        },
        {
            cell: <ButtonList2/>,
            title: 'Disabled',
            text: 'Disabled checkbox.'
        },
        {
            cell: <ButtonList3/>,
            title: 'Check all',
            text: 'Check all checkbox.'
        },
        {
            cell: <ButtonList4/>,
            title: 'Use with Grid',
            text: 'We can use Checkbox and Grid to implement complex layout.'
        },
        {
            cell: <ButtonList5/>,
            title: 'Controlled Checkbox',
            text: 'Communicated with other components.'
        },
        {
            cell: <ButtonPreview/>,
            title: 'Controlled Checkbox',
            text: 'Communicated with other components.'
        }
    ]

    return (
        <div className='checkbox-wrapper'>
            <div className='par-1'>Button</div>
            <div className='text'>Checkbox component.</div>
            <div className='par-2'>Examples</div>
            <div>
                <CardWrapper>
                { elements.map((el) => {
                    return(
                    <div>
                        <Card cardType={CardType.THIRD} cell={el.cell} title={el.title} text={el.text}/>
                    </div>
                    )
                })}
                </CardWrapper>
            </div>
        </div>
    )
}