import './ButtonStory.css'
import { Card, CardType } from '../cards/Card'
import { CardWrapper } from '../cards/CardWrapper'
import { ButtonList1, ButtonList2, ButtonList3, ButtonList4, ButtonList5, ButtonPreview  } from '../buttonList/index'

export const ButtonStory = () => {

    const elements = [
        {
            cell: <ButtonList1/>,
            title: 'Type',
            text: 'There are primary button, default button, text button and link button.'
        },
        {
            cell: <ButtonList2/>,
            title: 'Size',
            text: 'A default button size supports as well as a large and small size. If a large or small button is desired, set the size property to either large or small respectively. Omit the size property for a button with the default size.'
        },
        {
            cell: <ButtonList3/>,
            title: 'Icon',
            text: 'Button components can contain an Icon. This is done by setting the icon property or placing an Icon component within the Button. If you want specific control over the positioning and placement of the Icon, then that should be done by placing the Icon component within the Button rather than using the icon property.'
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
        <div className='button-wrapper'>
            <div className='button-list'>
                <div className='par-1'>Button</div>
                <div className='text'>Checkbox component.</div>
                <div className='par-2'>Examples</div>
            </div>
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