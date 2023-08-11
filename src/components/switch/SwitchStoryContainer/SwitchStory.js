import './SwitchStory.css'
import { SwitchStory1, SwitchStory2, SwitchStory3, SwitchStory4, SwitchStory5 } from './switchStories'
import { Card, CardType } from '../../cards/Card'
import { CardWrapper } from '../../cards/CardWrapper'
import { Link } from 'react-router-dom'
import { Button, ButtonSize, ButtonType } from '../../button'
import React from 'react';

export const SwitchStory = () => {

    const elements = [
        {
            cell: <SwitchStory1/>,
            title: 'Basic',
            text: 'The most basic usage.',
            documentation: <Button
              size={ButtonSize.MEDIUM}
              type={ButtonType.LINK}
              text={'Click'}
              colored={'pressed'}
            />
        },
        {
            cell: <SwitchStory2/>,
            title: 'Disabled',
            text: 'Disabled state of Switch.',
            documentation: <Button
            size={ButtonSize.MEDIUM}
            type={ButtonType.LINK}
            text={'Click'}
            colored={'pressed'}
          />
        },
        {
            cell: <SwitchStory3/>,
            title: 'Text & icon',
            text: 'With text and icon.',
            documentation: <Button
            size={ButtonSize.MEDIUM}
            type={ButtonType.LINK}
            text={'Click'}
            colored={'pressed'}
          />
        },
        {
            cell: <SwitchStory4/>,
            title: 'Two sizes',
            text: 'size="small" represents a small sized switch.',
            documentation: <Button
            size={ButtonSize.MEDIUM}
            type={ButtonType.LINK}
            text={'Click'}
            colored={'pressed'}
          />
        },
        {
            cell: <SwitchStory5/>,
            title: 'Loading',
            text: 'Mark a pending state of switch.',
            documentation: <Button
            size={ButtonSize.MEDIUM}
            type={ButtonType.LINK}
            text={'Click'}
            colored={'pressed'}
          />
        }
    ]

    return(
        <div className='switch-wrapper'>
            <div className='switch-list'>
                <div className='par-1'>Switch</div>
                <div className='text1'>Switching Selector.</div>
                <div className='par-2'>When To Use</div>
                <ul>
                    <li className='text1'>If you need to represent the switching between two states or on-off state.</li>
                    <li className='text1'>The difference between Switch and Checkbox is that Switch will trigger a state change directly when you toggle it, while Checkbox is generally used for state marking, which should work in conjunction with submit operation.</li>
                </ul>
                <div className='par-2'>Examples</div>
            </div>
            <CardWrapper>
              { elements.map((el, index) => {
                  return(
                  <div key={index}>
                    <Card 
                        cardType={CardType.FIRST} 
                        cell={el.cell} 
                        title={el.title} 
                        text={el.text}
                        documentation={el.documentation}
                    />
                  </div>
                  )
              })}
              </CardWrapper>
        </div>
    )
}