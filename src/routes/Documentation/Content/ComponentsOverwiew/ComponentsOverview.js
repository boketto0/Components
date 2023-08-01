import './ComponentsOverview.css';
import { Card, CardType } from '../../../../components/cards/Card';
import { CardWrapper } from '../../../../components/cards/CardWrapper';
import { Button, ButtonType, ButtonSize } from '../../../../components/button';
import { Checkbox } from '../../../../components/checkbox';
import { CheckboxStory2 } from '../../../../components/checkbox/CheckboxStoryContainer/checkboxStories';
import { SwitchStory2 } from '../../../../components/switch/SwitchStoryContainer/switchStories';
import { SwitchStory4 } from '../../../../components/switch/SwitchStoryContainer/switchStories';
import React from 'react';
import { Link } from 'react-router-dom';

export const ComponenetsOverview = () => {

  const componentsStory = [
    {
      title: 'button',
      component: (
        <div className='card-component'>
          <Button colored={"pressed"} size={ButtonSize.LARGE} type={ButtonType.PRIMARY} text={'Documentation'} />
        </div>
      )
    },
    {
      title: 'switch',
      component: (
        <div className='card-component'>
          <Button colored={"pressed"} size={ButtonSize.LARGE} type={ButtonType.PRIMARY} text={'Documentation'} />
        </div>
      )
    },
    {
      title: 'checkbox',
      component: (
        <div className='card-component'>
          <Button colored={"pressed"} size={ButtonSize.LARGE} type={ButtonType.PRIMARY} text={'Documentation'} />
        </div>
      )
    }
  ];

  return (
    <div className='components-wrapper'>
      <div>
        <div className="par-1">Components Overview</div>
        <div className="par-2">Components</div>
      </div>
      <CardWrapper className='components-list a'>
        {componentsStory.map((el) => (
          <div key={el.title}>
            <Link to={`/${el.title}`}>
              <Card cardType={CardType.SECOND} title={el.title} component={el.component} />
            </Link>
          </div>
        ))}
      </CardWrapper>
    </div>
  );
};