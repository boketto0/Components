import './CardsDisplay.css'
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, CardType } from '../cards/Card'; 

export const CardsDisplay = ({ elements, componentName, id }) => {
  const navigate = useNavigate();

  const selectedCard = elements[componentName][id];

  if (!selectedCard) {
    return <div>Card not found</div>;
  }

  const handleBackClick = () => {
    navigate(`/${componentName}`);
  };

  let cardType;
  if (selectedCard.cardType === 'THIRD') {
    cardType = CardType.THIRD;
  } else if (selectedCard.cardType === 'SECOND') {
    cardType = CardType.SECOND;
  } else {
    cardType = CardType.FIRST;
  }

  console.log(`Component Name - ${componentName}`);
  console.log(`Id - ${id}`);

  return (
    <div className='story-wrapper'>
        <div className='breadcrums'>
          <div onClick={handleBackClick}>
          <span className='breadcrums-text1'>История:</span>
          <span className='componentName'>{componentName}</span>
          <span>/</span>
          <span>{id}</span>
          </div>
        </div>
        <div>
            {selectedCard.cell}
            <div className="card-title">{selectedCard.title}</div>
            <div className="card-text">{selectedCard.text}</div>
            <div>{selectedCard.documentation}</div>
         </div>
    </div>
  );
};
/* eslint react/prop-types: 0 */
/*
CardsDisplay.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      cell: PropTypes.node.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      documentation: PropTypes.node.isRequired,
      cardType: PropTypes.string.isRequired, 
    })
  ).isRequired,
  componentName: PropTypes.string,
  id: PropTypes.number.isRequired
};*/