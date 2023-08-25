import './PaginationStory.css';
import { Card, CardType } from '../../cards/Card';
import { CardWrapper } from '../../cards/CardWrapper';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, ButtonSize, ButtonType } from '../../button';
import { PaginationStory1, PaginationStory2, PaginationStory3, PaginationStory4, PaginationStory5, PaginationStory6, PaginationStory7, PaginationStory8, PaginationStory9, PaginationStory10 } from './paginationList';

export const paginationElements = [
  {
    id: 1,
    cell: <PaginationStory1/>,
    title: 'Basic',
    text: 'Basic pagination.',
  },
  {
    id: 2,
    cell: <PaginationStory2/>,
    title: 'More',
    text: 'More pages.',
  },
  {
    id: 3,
    cell: <PaginationStory3/>,
    title: 'Changer',
    text: 'Change pageSize.'
  },
  {
    id: 4,
    cell: <PaginationStory4/>,
    title: 'Jumper',
    text: 'Jump to a page directly.',
  },
  {
    id: 5,
    cell: <PaginationStory5/>,
    title: 'Mini size',
    text: 'Mini size pagination.',
  },
  {
    id: 6,
    cell: <PaginationStory6/>,
    title: 'Simple mode',
    text: 'Simple mode.',
  },
  {
    id: 7,
    cell: <PaginationStory7/>,
    title: 'Controlled',
    text: 'Controlled page number.',
  },
  {
    id: 8,
    cell: <PaginationStory8/>,
    title: 'Total number',
    text: 'You can show the total number of data by setting showTotal.',
  },
  {
    id: 9,
    cell: <PaginationStory9/>,
    title: 'Show all',
    text: 'Show all configured prop.',
  },
  {
    id: 10,
    cell: <PaginationStory10/>,
    title: 'Prev and next',
    text: 'Use text link for prev and next button.',
  },
];


export const PaginationStory = () => {

  const location = useLocation();
  const componentName = location.pathname.split('/')[1]

  return (
    <div className='pagination-wrapper'>
      <div className='pagination-list'>
        <div className='par-1'>Pagination</div>
        <div className='text1'>A long list can be divided into several pages using Pagination, and only one page will be loaded at a time.</div>
        <div className='par-2'>When to use</div>
        <div className='text1'>
            When it will take a long time to load/render all items.
            If you want to browse the data by navigating through pages.
        </div>
      </div>
      <div>
        <CardWrapper>
          {paginationElements.map((el) => (
            <div key={el.id}>
              <Card
                cardType={CardType.THIRD}
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

