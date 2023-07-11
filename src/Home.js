import './Home.css'
import { Cell1, Cell2, Cell3, Cell4, Cell5 } from './components/cells'
import { CardWrapper } from './components/cards/CardWrapper'
import { Card, CardType } from './components/cards/Card'

export default function Home() {

    const elements = [
        {
            cell: <Cell1/>,
            title: 'Basic',
            text: 'The most basic usage.'
        },
        {
            cell: <Cell2/>,
            title: 'Disabled',
            text: 'Disabled state of Switch.'
        },
        {
            cell: <Cell3/>,
            title: 'Text & icon',
            text: 'With text and icon.'
        },
        {
            cell: <Cell4/>,
            title: 'Two sizes',
            text: 'size="small" represents a small sized switch.'
        },
        {
            cell: <Cell5/>,
            title: 'Loading',
            text: 'Mark a pending state of switch.'
        }
    ]

    return(
        <div className='home'>
            <div className='par-1'>Switch</div>
            <div className='text'>Switching Selector.</div>
            <div className='par-2'>When To Use</div>
            <ul>
                <li className='text'>If you need to represent the switching between two states or on-off state.</li>
                <li className='text'>The difference between Switch and Checkbox is that Switch will trigger a state change directly when you toggle it, while Checkbox is generally used for state marking, which should work in conjunction with submit operation.</li>
            </ul>
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