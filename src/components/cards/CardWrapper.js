import './CardWrapper.css';
import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

export function CardWrapper(props) {
  const [numColumns, setNumColumns] = useState(3); 

  useEffect(() => {
    function calculateColumns() {
      const screenWidth = window.innerWidth;
      const cardWidth = 400; 

      const newNumColumns = Math.floor(screenWidth / cardWidth);
      setNumColumns(newNumColumns);
    }

    calculateColumns();
    window.addEventListener('resize', calculateColumns);
    return () => window.removeEventListener('resize', calculateColumns);
  }, []);

  const gridTemplateColumns = `repeat(${numColumns}, minmax(0, 1fr))`;

  const classes = `card ${props.className}`;
  return (
    <div className={classes} style={{ gridTemplateColumns }}>
      {props.children}
    </div>
  );
}

CardWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}