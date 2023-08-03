import './ButtonStory.css';
import { Card, CardType } from '../../cards/Card';
import { CardWrapper } from '../../cards/CardWrapper';
import { ButtonList1, ButtonList2, ButtonList3, ButtonList4, ButtonList5 } from './buttonList/index';
import React from 'react';
import { Button, ButtonSize, ButtonType } from '../Button';
import { Routes, Route, Link } from 'react-router-dom';
import { CardsDisplay } from '../../display/CardsDisplay';
import { useNavigate } from 'react-router-dom';

export const ButtonStory = () => {
  const elements = [
    {
      id: 1,
      cell: <ButtonList1 />,
      title: 'Type',
      text: 'There are primary button, default button, text button and link button.',
    },
    {
      id: 2,
      cell: <ButtonList2 />,
      title: 'Size',
      text:
        'A default button size supports as well as a large and small size. If a large or small button is desired, set the size property to either large or small respectively. Omit the size property for a button with the default size.',
    },
    {
      id: 3,
      cell: <ButtonList3 />,
      title: 'Icon',
      text:
        'Button components can contain an Icon. This is done by setting the icon property or placing an Icon component within the Button. If you want specific control over the positioning and placement of the Icon, then that should be done by placing the Icon component within the Button rather than using the icon property.',
    },
    {
      id: 4,
      cell: <ButtonList4 />,
      title: 'Disabled',
      text: 'To mark a button as disabled, add the disabled property to the Button.',
    },
    {
      id: 5,
      cell: <ButtonList5 />,
      title: 'Loading',
      text: 'A loading indicator can be added to a button by setting the loading property on the Button.',
    },
  ];

  const navigate = useNavigate();

  return (
    <div className='button-wrapper'>
      <div className='button-list'>
        <div className='par-1'>Button</div>
        <div className='text1'>To trigger an operation.</div>
        <div className='par-2'>When to use</div>
        <div className='text1'>
          A button means an operation (or a series of operations). Clicking a button will trigger corresponding business
          logic.
        </div>
      </div>
      <div>
        <CardWrapper>
          {elements.map((el) => {
            return (
              <div key={el.id}>
                <Card
                  cardType={CardType.THIRD}
                  cell={el.cell}
                  title={el.title}
                  text={el.text}
                  documentation={
                    <Button
                      size={ButtonSize.MEDIUM}
                      type={ButtonType.LINK}
                      text={'Click'}
                      colored={'pressed'}
                      onClick={() => navigate(`/card/${el.id}`)}
                    />
                  }
                />
              </div>
            );
          })}
        </CardWrapper>
      </div>
    </div>
  );
};