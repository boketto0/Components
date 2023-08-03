import React from 'react';
import { Card, CardType } from '../cards/Card';
import { Button, ButtonSize, ButtonType } from '../button/Button';
import { Switch } from '../switch/Switch';
import { Checkbox } from '../checkbox';
import { Link, useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';

export const CardsDisplay = ({ cards }) => {
  const { id } = useParams();
  const card = cards.find((el) => el.id === parseInt(id));
  if (!card) {
    return <div>Card not found</div>;
  }

  const { title, text, cell, documentation } = card;

  // Определение типа карточки на основе наличия свойств cell и documentation
  const cardType = cell ? CardType.THIRD : CardType.FIRST;

  return (
    <div className='cards_display'>
      <Card cardType={cardType} cell={cell} title={title} text={text} documentation={documentation} />
      {/* Проверка наличия documentation и определение типа кнопки */}
      {documentation && (
        <div>
          {cardType === CardType.THIRD ? (
            <Button size={ButtonSize.MEDIUM} type={ButtonType.LINK} text={'Click'} colored={'pressed'} />
          ) : cardType === CardType.FIRST ? (
            <Checkbox text={'Documentation'} />
          ) : (
            <Switch text={'Documentation'} />
          )}
          <Link to={`/card/${id}`} />
        </div>
      )}
    </div>
  );
};

CardsDisplay.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      text: PropTypes.string,
      cell: PropTypes.node,
      documentation: PropTypes.node,
    })
  ),
};