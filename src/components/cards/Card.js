import React from 'react';
import './Card.css';
import { PropTypes } from 'prop-types';

export const CardType = {
  FIRST: 'first',
  SECOND: 'second',
  THIRD: 'third',
};

export function Card(props) {
  const defaultCardType = CardType.FIRST;

  return (
    <div>
      <div className={`card-${props.cardType || defaultCardType}`}>
        {props.cardType === CardType.FIRST && (
          <div>
            <div>{props.cell}</div>
            <div className="card-title">{props.title}</div>
            <div className="card-text">{props.text}</div>
          </div>
        )}
        {props.cardType === CardType.SECOND && (
          <div>
            <div className="card-title">{props.title}</div>
            <div className="card-text">{props.text}</div>
            <div className="card-component">{props.component}</div>
          </div>
        )}
        {props.cardType === CardType.THIRD && (
          <div>
            <div className="card-component">{props.component}</div>
            <div>{props.cell}</div>
            <div className="card-title">{props.title}</div>
            <div className="card-text">{props.text}</div>
          </div>
        )}
      </div>
    </div>
  );
}

Card.propTypes = {
  cardType: PropTypes.oneOf(Object.values(CardType)),
  cell: PropTypes.node,
  title: PropTypes.string,
  text: PropTypes.string,
  component: PropTypes.node,
};
