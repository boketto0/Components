import './ComponentsOverview.css';
import { Card, CardType } from '../../../components/cards/Card';
import { CardWrapper } from '../../../components/cards/CardWrapper';
import React from 'react';
import { Link } from 'react-router-dom';
import Icon1 from '../../../assets/images/componentsPicture/button.svg'
import Icon2 from '../../../assets/images/componentsPicture/switch.svg'
import Icon3 from '../../../assets/images/componentsPicture/checkbox.svg'

export const ComponenetsOverview = () => {

  const componentsStory = [
    {
      title: 'button',
      picture: <img src={Icon1}/>
    },
    {
      title: 'switch',
      picture: <img src={Icon2}/>
    },
    {
      title: 'checkbox',
      picture: <img src={Icon3}/>
    },
    {
      title: 'dropdown',
      picture: <img src={Icon3}/>
    },
    {
      title: 'pagination',
      picture: <img src={Icon3}/>
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
              <Card 
                cardType={CardType.SECOND} 
                title={el.title} 
                picture={el.picture} />
            </Link>
          </div>
        ))}
      </CardWrapper>
    </div>
  );
};