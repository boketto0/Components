import './ComponentsOverview.css';
import { Card, CardType } from './cards/Card';
import { CardWrapper } from './cards/CardWrapper';
import { Button, ButtonSize, ButtonType } from './button/Button';
import { Checkbox } from './checkbox';
import { CheckboxStory2 } from './checkboxStories';
import { SwitchStory2 } from './switchStories';
import { SwitchStory4 } from './switchStories';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

export const ComponenetsOverview = () => {

  const componentsStory = [
    {
      title: 'button',
      component: (
        <div className='card-component'>
          <Button size={ButtonSize.MEDIUM} type={ButtonType.PRIMARY} text={'Button'} />
          <Button size={ButtonSize.LARGE} type={ButtonType.SECONDARY} text={'Button'} />
          <Button type={ButtonType.TEXT} text={'Button'} />
        </div>
      )
    },
    {
      title: 'switch',
      component: (
        <div className='card-component'>
          <SwitchStory2 />
          <SwitchStory4 />
        </div>
      )
    },
    {
      title: 'checkbox',
      component: (
        <div className='card-component'>
          <Checkbox text={'Check all'} />
          <CheckboxStory2 />
        </div>
      )
    }
  ];

  return (
    <div className='components-wrapper'>
      <div className='components-list'>
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