import './CheckboxStory.css';
import { CheckboxStory1, CheckboxStory2, CheckboxStory3, CheckboxStory4, CheckboxStory5, CheckboxStory6 } from './checkboxStories/index';
import { Card, CardType } from '../../cards/Card';
import { CardWrapper } from '../../cards/CardWrapper';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, ButtonType, ButtonSize } from '../../button';


export const checkboxElements = [
    {
      id: 1,
      cell: <CheckboxStory1 />,
      title: 'Basic',
      text: 'Basic usage of checkbox.',
      documentation: <Button
      size={ButtonSize.MEDIUM}
      type={ButtonType.LINK}
      text={'Click'}
      colored={'pressed'}
    />
    },
    {
      id: 2,
      cell: <CheckboxStory2 />,
      title: 'Disabled',
      text: 'Disabled checkbox.',
      documentation: <Button
      size={ButtonSize.MEDIUM}
      type={ButtonType.LINK}
      text={'Click'}
      colored={'pressed'}
    />
    },
    {
      id: 3,
      cell: <CheckboxStory3 />,
      title: 'Check all',
      text: 'Check all checkbox.',
      documentation: <Button
      size={ButtonSize.MEDIUM}
      type={ButtonType.LINK}
      text={'Click'}
      colored={'pressed'}
    />
    },
    {
      id: 4,
      cell: <CheckboxStory4 />,
      title: 'Use with Grid',
      text: 'We can use Checkbox and Grid to implement complex layout.',
      documentation: <Button
      size={ButtonSize.MEDIUM}
      type={ButtonType.LINK}
      text={'Click'}
      colored={'pressed'}
    />
    },
    {
      id: 5,
      cell: <CheckboxStory5 />,
      title: 'Controlled Checkbox',
      text: 'Communicated with other components.',
      documentation: <Button
      size={ButtonSize.MEDIUM}
      type={ButtonType.LINK}
      text={'Click'}
      colored={'pressed'}
    />
    },
    {
      id: 6,
      cell: <CheckboxStory6 />,
      title: 'Checkbox Group',
      text: 'Generate a group of checkboxes from an array.',
      documentation: <Button
      size={ButtonSize.MEDIUM}
      type={ButtonType.LINK}
      text={'Click'}
      colored={'pressed'}
    />
    },
  ];

export const CheckboxStory = () => {

  const location = useLocation();
  const componentName = location.pathname.split('/')[1]

  return (
    <div className='checkbox-wrapper'>
      <div className='checkbox-list'>
        <div className='par-1'>Checkbox</div>
        <div className='text1'>Checkbox component.</div>
        <div className='par-2'>Examples</div>
      </div>
      <div>
        <CardWrapper>
          {checkboxElements.map((el) => (
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