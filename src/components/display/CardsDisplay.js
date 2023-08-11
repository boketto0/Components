import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, CardType } from '../cards/Card'; 

export const CardsDisplay = ({ elements }) => {
  const { componentName, id } = useParams();
  const navigate = useNavigate();

  const selectedCard = elements.find(card => card.id === parseInt(id));

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

  return (
    <div>
      <div>
        <Link to={`/${componentName}/${id}`}>Back to {componentName}</Link>
      </div>
      {/* <Card cardType={cardType}>  */}
      <div>
        {selectedCard.cell}
        <div>{selectedCard.title}</div>
        <div>{selectedCard.text}</div>
        <div>{selectedCard.documentation}</div>
      {/* </Card> */}
      </div>
      <div>
        <button onClick={handleBackClick}>Back</button>
      </div>
    </div>
  );
};

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
};