<<<<<<< HEAD
import './ButtonStory.css';
import React from 'react';
import { Card, CardType } from '../../cards/Card';
import { CardWrapper } from '../../cards/CardWrapper';
import {
  ButtonList1, ButtonList2, ButtonList3, ButtonList4, ButtonList5,
} from './buttonList/index';
=======
import './ButtonStory.css'
import { Card, CardType } from '../../cards/Card'
import { CardWrapper } from '../../cards/CardWrapper'
import { ButtonList1, ButtonList2, ButtonList3, ButtonList4, ButtonList5} from './buttonList/index'
import React from 'react';
>>>>>>> 7c08ad1 (везде добавлена проверка типов, добавлен key в map)

export function ButtonStory() {
  const elements = [
    {
      cell: <ButtonList1 />,
      title: 'Type',
      text: 'There are primary button, default button, text button and link button.',
    },
    {
      cell: <ButtonList2 />,
      title: 'Size',
      text: 'A default button size supports as well as a large and small size. If a large or small button is desired, set the size property to either large or small respectively. Omit the size property for a button with the default size.',
    },
    {
      cell: <ButtonList3 />,
      title: 'Icon',
      text: 'Button components can contain an Icon. This is done by setting the icon property or placing an Icon component within the Button. If you want specific control over the positioning and placement of the Icon, then that should be done by placing the Icon component within the Button rather than using the icon property.',
    },
    {
      cell: <ButtonList4 />,
      title: 'Disabled',
      text: 'To mark a button as disabled, add the disabled property to the Button.',
    },
    {
      cell: <ButtonList5 />,
      title: 'Loading',
      text: 'A loading indicator can be added to a button by setting the loading property on the Button.',
    },
  ];

<<<<<<< HEAD
  return (
    <div className="button-wrapper">
      <div className="button-list">
        <div className="par-1">Button</div>
        <div className="text1">To trigger an operation.</div>
        <div className="par-2">When to use</div>
        <div className="text1">A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.</div>
      </div>
      <div>
        <CardWrapper>
          { elements.map((el, index) => (
            <div key={index}>
              <Card cardType={CardType.THIRD} cell={el.cell} title={el.title} text={el.text} />
=======
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
            title: 'Disabled',
            text: 'To mark a button as disabled, add the disabled property to the Button.'
        },
        {
            cell: <ButtonList5/>,
            title: 'Loading',
            text: 'A loading indicator can be added to a button by setting the loading property on the Button.'
        }
    ]

    return (
        <div className='button-wrapper'>
            <div className='button-list'>
                <div className='par-1'>Button</div>
                <div className='text1'>To trigger an operation.</div>
                <div className='par-2'>When to use</div>
                <div className='text1'>A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.</div>
            </div>
            <div>
                <CardWrapper>
                { elements.map((el, index) => {
                    return(
                    <div key={index}>
                        <Card cardType={CardType.THIRD} cell={el.cell} title={el.title} text={el.text}/>
                    </div>
                    )
                })}
                </CardWrapper>
>>>>>>> 7c08ad1 (везде добавлена проверка типов, добавлен key в map)
            </div>
          ))}
        </CardWrapper>
      </div>
    </div>
  );
}
