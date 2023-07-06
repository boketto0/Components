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
            disabled={optionsProperty[index].disabled}
          />
        ))}
      </div>

      {/* Второй ряд */}
      <div className="checkbox-row">
        <Checkbox
          value={options[0].value}
          text={options[0].label}
          disabled={optionsProperty[0].disabled}
        />
        <Checkbox
          value={options[1].value}
          text={options[1].label}
          disabled={optionsProperty[1].disabled}
          checked={optionsProperty[1].checked}
        />
        <Checkbox
          value={options[2].value}
          text={options[2].label}
          disabled={optionsProperty[2].disabled}
          indeterminate={optionsProperty[2].indeterminate}
        />
      </div>

      {/* Третий ряд */}
      <div className="checkbox-row">
        <Checkbox
          value={options[0].value}
          text={options[0].label}
          disabled={optionsProperty[0].disabled}
        />
        <Checkbox
          value={options[1].value}
          text={options[1].label}
          disabled={optionsProperty[1].disabled}
          checked={optionsProperty[1].checked}
        />
        <Checkbox
          value={options[2].value}
          text={options[2].label}
          disabled={optionsProperty[2].disabled}
          indeterminate={optionsProperty[2].indeterminate}
        />
      </div>
    </div>
  );
};