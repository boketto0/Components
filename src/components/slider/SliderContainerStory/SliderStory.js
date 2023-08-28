import './SliderStory.css';
import { Card, CardType } from '../../cards/Card';
import { CardWrapper } from '../../cards/CardWrapper';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, ButtonSize, ButtonType } from '../../button';
import { SliderStory1 } from './sliderList';

export const sliderElements = [
  {
    id: 1,
    cell: <SliderStory1/>,
    title: 'Basic',
    text: 'The most basic dropdown menu.',
  },
  {
    id: 2,
    cell: <div/>,
    title: 'Placement',
    text: 'Support 6 placements.',
  },
  {
    id: 3,
    cell: <div/>,
    title: 'Arrow',
    text: 'You could display an arrow.'
  },
  {
    id: 4,
    cell: <div/>,
    title: 'Other elements',
    text: 'Divider and disabled menu item.',
  },
  {
    id: 5,
    cell: <div/>,
    title: 'Arrow pointing at the center',
    text: 'By specifying arrow prop with { pointAtCenter: true }, the arrow will point to the center of the target element.',
  },
  {
    id: 6,
    cell: <div/>,
    title: 'Trigger mode',
    text: 'The default trigger mode is hover, you can change it to click.',
  },
  {
    id: 7,
    cell: <div/>,
    title: 'Click event',
    text: 'An event will be triggered when you click menu items, in which you can make different operations according to item`s key.',
  },
  {
    id: 8,
    cell: <div/>,
    title: 'Button with dropdown menu',
    text: 'A button is on the left, and a related functional menu is on the right. You can set the icon property to modify the icon of right.',
  },
  {
    id: 9,
    cell: <div/>,
    title: 'Custom dropdown',
    text: 'The default trigger mode is hover, you can change it to click.',
  },
  {
    id: 10,
    cell: <div/>,
    title: 'Cascading menu',
    text: 'The menu has multiple levels.',
  },
  {
    id: 11,
    cell: <div/>,
    title: 'The way of hiding menu.',
    text: 'The default is to close the menu when you click on menu items, this feature can be turned off.',
  },
  {
    id: 12,
    cell: <div/>,
    title: 'Context Menu',
    text: 'The default trigger mode is hover, you can change it to contextMenu.',
  },
  {
    id: 13,
    cell: <div/>,
    title: 'Loading',
    text: 'A loading indicator can be added to a button by setting the loading property on the Dropdown.Button.',
  },
  {
    id: 14,
    cell: <div/>,
    title: 'Selectable Menu',
    text: 'Configure the selectable property in menu to enable selectable ability.',
  },
];


export const SliderStory = () => {

  const location = useLocation();
  const componentName = location.pathname.split('/')[1]

  return (
    <div className='slider-wrapper'>
      <div className='slider-list'>
        <div className='par-1'>Dropdown</div>
        <div className='text1'>A dropdown list.</div>
        <div className='par-2'>When to use</div>
        <div className='text1'>
          When there are more than a few options to choose from, you can wrap them in a Dropdown. By hovering or clicking on the trigger, a dropdown menu will appear, which allows you to choose an option and execute the relevant action.
        </div>
      </div>
      <div>
        <CardWrapper>
          {sliderElements.map((el) => (
            <div key={el.id}>
              <Card
                cardType={CardType.FIRST}
                cell={el.cell}
                title={el.title}
                text={el.text}
                documentation={
                  <Link to = {`/${componentName}/${el.id}`}>
                    <Button
                      size={ButtonSize.MEDIUM}
                      type={ButtonType.LINK}
                      text={'Open'}
                      colored={'pressed'}
                    />
                  </Link>
                }
              />
            </div>
          ))}
        </CardWrapper>
      </div>
    </div>
  );
};

