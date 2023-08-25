import './DropdownStory.css';
import { Card, CardType } from '../../cards/Card';
import { CardWrapper } from '../../cards/CardWrapper';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, ButtonSize, ButtonType } from '../../button';
import { DropdownStory1, DropdownStory2, DropdownStory3, DropdownStory4, DropdownStory5, DropdownStory6, DropdownStory7, DropdownStory8, DropdownStory9, DropdownStory10, DropdownStory11, DropdownStory12, DropdownStory13, DropdownStory14 } from './dropdownList';

export const dropdownElements = [
  {
    id: 1,
    cell: <DropdownStory1/>,
    title: 'Basic',
    text: 'The most basic dropdown menu.',
  },
  {
    id: 2,
    cell: <DropdownStory2/>,
    title: 'Placement',
    text: 'Support 6 placements.',
  },
  {
    id: 3,
    cell: <DropdownStory3/>,
    title: 'Arrow',
    text: 'You could display an arrow.'
  },
  {
    id: 4,
    cell: <DropdownStory4/>,
    title: 'Other elements',
    text: 'Divider and disabled menu item.',
  },
  {
    id: 5,
    cell: <DropdownStory5/>,
    title: 'Arrow pointing at the center',
    text: 'By specifying arrow prop with { pointAtCenter: true }, the arrow will point to the center of the target element.',
  },
  {
    id: 6,
    cell: <DropdownStory6/>,
    title: 'Trigger mode',
    text: 'The default trigger mode is hover, you can change it to click.',
  },
  {
    id: 7,
    cell: <DropdownStory7/>,
    title: 'Click event',
    text: 'An event will be triggered when you click menu items, in which you can make different operations according to item`s key.',
  },
  {
    id: 8,
    cell: <DropdownStory8/>,
    title: 'Button with dropdown menu',
    text: 'A button is on the left, and a related functional menu is on the right. You can set the icon property to modify the icon of right.',
  },
  {
    id: 9,
    cell: <DropdownStory9/>,
    title: 'Custom dropdown',
    text: 'The default trigger mode is hover, you can change it to click.',
  },
  {
    id: 10,
    cell: <DropdownStory10/>,
    title: 'Cascading menu',
    text: 'The menu has multiple levels.',
  },
  {
    id: 11,
    cell: <DropdownStory11/>,
    title: 'The way of hiding menu.',
    text: 'The default is to close the menu when you click on menu items, this feature can be turned off.',
  },
  {
    id: 12,
    cell: <DropdownStory12/>,
    title: 'Context Menu',
    text: 'The default trigger mode is hover, you can change it to contextMenu.',
  },
  {
    id: 13,
    cell: <DropdownStory13/>,
    title: 'Loading',
    text: 'A loading indicator can be added to a button by setting the loading property on the Dropdown.Button.',
  },
  {
    id: 14,
    cell: <DropdownStory14/>,
    title: 'Selectable Menu',
    text: 'Configure the selectable property in menu to enable selectable ability.',
  },
];


export const DropdownStory = () => {

  const location = useLocation();
  const componentName = location.pathname.split('/')[1]

  return (
    <div className='dropdown-wrapper'>
      <div className='dropdown-list'>
        <div className='par-1'>Dropdown</div>
        <div className='text1'>A dropdown list.</div>
        <div className='par-2'>When to use</div>
        <div className='text1'>
          When there are more than a few options to choose from, you can wrap them in a Dropdown. By hovering or clicking on the trigger, a dropdown menu will appear, which allows you to choose an option and execute the relevant action.
        </div>
      </div>
      <div>
        <CardWrapper>
          {dropdownElements.map((el) => (
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

