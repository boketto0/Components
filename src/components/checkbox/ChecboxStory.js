import './CheckboxStory.css'
import { Cell1Story, Cell2Story, Cell3Story, Cell4Story, Cell5Story, Cell6Story } from '../cells'
import { Card, CardType } from '../cards/Card'
import { CardWrapper } from '../cards/CardWrapper'

export const CheckboxStory = () => {

    const elements = [
        {
            cell: <Cell1Story/>,
            title: 'Basic',
            text: 'Basic usage of checkbox.'
        },
        {
            cell: <Cell2Story/>,
            title: 'Disabled',
            text: 'Disabled checkbox.'
        },
        {
            cell: <Cell3Story/>,
            title: 'Check all',
            text: 'Check all checkbox.'
        },
        {
            cell: <Cell4Story/>,
            title: 'Use with Grid',
            text: 'We can use Checkbox and Grid to implement complex layout.'
        },
        {
            cell: <Cell5Story/>,
            title: 'Controlled Checkbox',
            text: 'Communicated with other components.'
        },
        {
            cell: <Cell6Story/>,
            title: 'Checkbox Group',
            text: 'Generate a group of checkboxes from an array.'
        }
    ]

    return (
        <div>
            <div className='par-1'>Checkbox</div>
            <div className='text'>Checkbox component.</div>
            <div className='par-2'>Examples</div>
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
    )
}