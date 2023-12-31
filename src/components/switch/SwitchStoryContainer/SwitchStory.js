<<<<<<< HEAD
import './SwitchStory.css';
import React from 'react';
import {
  SwitchStory1, SwitchStory2, SwitchStory3, SwitchStory4, SwitchStory5,
} from './switchStories';
import { Card, CardType } from '../../cards/Card';
import { CardWrapper } from '../../cards/CardWrapper';
=======
import './SwitchStory.css'
import { SwitchStory1, SwitchStory2, SwitchStory3, SwitchStory4, SwitchStory5 } from './switchStories'
import { Card, CardType } from '../../cards/Card'
import { CardWrapper } from '../../cards/CardWrapper'
import React from 'react';
>>>>>>> 7c08ad1 (везде добавлена проверка типов, добавлен key в map)

export function SwitchStory() {
  const elements = [
    {
      cell: <SwitchStory1 />,
      title: 'Basic',
      text: 'The most basic usage.',
    },
    {
      cell: <SwitchStory2 />,
      title: 'Disabled',
      text: 'Disabled state of Switch.',
    },
    {
      cell: <SwitchStory3 />,
      title: 'Text & icon',
      text: 'With text and icon.',
    },
    {
      cell: <SwitchStory4 />,
      title: 'Two sizes',
      text: 'size="small" represents a small sized switch.',
    },
    {
      cell: <SwitchStory5 />,
      title: 'Loading',
      text: 'Mark a pending state of switch.',
    },
  ];

<<<<<<< HEAD
  return (
    <div className="switch-wrapper">
      <div className="switch-list">
        <div className="par-1">Switch</div>
        <div className="text1">Switching Selector.</div>
        <div className="par-2">When To Use</div>
        <ul>
          <li className="text1">If you need to represent the switching between two states or on-off state.</li>
          <li className="text1">The difference between Switch and Checkbox is that Switch will trigger a state change directly when you toggle it, while Checkbox is generally used for state marking, which should work in conjunction with submit operation.</li>
        </ul>
        <div className="par-2">Examples</div>
      </div>
      <CardWrapper>
        { elements.map((el, index) => (
          <div key={index}>
            <Card cardType={CardType.FIRST} cell={el.cell} title={el.title} text={el.text} />
          </div>
        ))}
      </CardWrapper>
    </div>
  );
}
=======
    const elements = [
        {
            cell: <SwitchStory1/>,
            title: 'Basic',
            text: 'The most basic usage.'
        },
        {
            cell: <SwitchStory2/>,
            title: 'Disabled',
            text: 'Disabled state of Switch.'
        },
        {
            cell: <SwitchStory3/>,
            title: 'Text & icon',
            text: 'With text and icon.'
        },
        {
            cell: <SwitchStory4/>,
            title: 'Two sizes',
            text: 'size="small" represents a small sized switch.'
        },
        {
            cell: <SwitchStory5/>,
            title: 'Loading',
            text: 'Mark a pending state of switch.'
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
                    <Card cardType={CardType.FIRST} cell={el.cell} title={el.title} text={el.text}/>
                  </div>
                  )
              })}
              </CardWrapper>
        </div>
    )
}
>>>>>>> 7c08ad1 (везде добавлена проверка типов, добавлен key в map)
