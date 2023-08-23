import './DropdownStory.css';
import { Card, CardType } from '../../cards/Card';
import { CardWrapper } from '../../cards/CardWrapper';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, ButtonSize, ButtonType } from '../../button';
import { DropdownStory1, DropdownStory2, DropdownStory3} from './dropdownList';

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
    cell: <div></div>,
    title: 'Other elements',
    text: 'Divider and disabled menu item.',
  },
  {
    id: 5,
    cell: <div></div>,
    title: 'Arrow pointing at the center',
    text: 'By specifying arrow prop with { pointAtCenter: true }, the arrow will point to the center of the target element.',
  },
  {
    id: 6,
    cell: <div></div>,
    title: 'Trigger mode',
    text: 'The default trigger mode is hover, you can change it to click.',
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

