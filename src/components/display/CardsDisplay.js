import React from 'react';
import { useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const CardsDisplay = ({ data }) => {
  const { id } = useParams();
  const selectedCard = data.find((el) => el.id === parseInt(id));

  return (
    <div>
      <h2>{selectedCard.title}</h2>
      <p>{selectedCard.text}</p>
      {/* Здесь можно отобразить остальную информацию выбранной карточки */}
    </div>
  );
};

CardsDisplay.propTypes = {
  data: PropTypes.array.isRequired,
};

export default CardsDisplay;