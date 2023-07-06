import React from 'react';
import { Checkbox } from '../checkbox/Checkbox';

export const Group = ({ options, optionsProperty }) => {
  return (
    <div className="checkbox-group">
      {/* Первый ряд */}
      <div className="checkbox-row">
        {options.map((option, index) => (
          <Checkbox
            key={index}
            value={option.value}
            text={option.label}
            disabled={false}
          />
        ))}
      </div>

      {/* Второй ряд */}
      <div className="checkbox-row">
        {options.map((option, index) => (
          <Checkbox
            key={index}
            value={option.value}
            text={option.label}
            disabled={false}
          />
        ))}
      </div>

      {/* Третий ряд */}
      <div className="checkbox-row">
        <Checkbox
          value={options[0].value}
          text={options[0].label}
          disabled={true}
        />
        <Checkbox
          value={options[1].value}
          text={options[1].label}
          disabled={true}
          checked={true}
        />
        <Checkbox
          value={options[2].value}
          text={options[2].label}
          disabled={true}
          indeterminate={true}
        />
      </div>
    </div>
  );
};