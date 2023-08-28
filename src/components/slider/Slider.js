import React, { useState } from 'react';
import './Slider.css';

export const Slider = () => {
  const [value, setValue] = useState(50); 

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={handleChange}
          className="range-input"
        />
        <div className="slider-value" style={{ left: `${(value / 100) * 300}px` }}>
          {value}
        </div>
      </div>
    </div>
  );
};


/* eslint react/prop-types: 0 */

