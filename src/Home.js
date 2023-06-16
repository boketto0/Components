import './Home.css'
import { Cell1, Cell2, Cell3, Cell4, Cell5 } from './components/cells'
import { CardWrapper } from './components/cards/CardWrapper'
import { Card, CardType } from './components/cards/Card'

export default function Home() {

    const elements = [
        {
            cell: <Cell1/>,
            title: 'Basic',
            text: 'Basic usage of checkbox.'
        },
        {
            cell: <Cell2/>,
            title: 'Disabled',
            text: 'Disabled checkbox.'
        },
        {
            cell: <Cell3/>,
            title: 'Check all',
            text: 'Check all checkbox.'
        },
        {
            cell: <Cell4/>,
            title: 'Use with Grid',
            text: 'We can use Checkbox and Grid to implement complex layout.'
        },
        {
            cell: <Cell5/>,
            title: 'Controlled Checkbox',
            text: 'Communicated with other components.'
        },
    ]

    return(
        <div className='home'>
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