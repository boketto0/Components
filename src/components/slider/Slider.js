import React, { useState } from 'react';
import 'rc-slider/assets/index.css';
import './Slider.css';

export const Slider = () => {
  const [values, setValues] = useState([10, 40]);

  const handleSliderChange = (newValues) => {
    setValues(newValues);
  };

  return (
    <div className="slider-container">
      <div className="slider-track">
        <div className="slider-filled-track" style={{ width: `${values[1] - values[0]}%`, left: `${values[0]}%` }} />
      </div>
      {values.map((value, index) => (
        <div key={index} className="slider-handle" style={{ left: `${value}%` }}>
          {value}
        </div>
      ))}
    </div>
  );
};

