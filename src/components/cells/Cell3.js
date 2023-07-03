import React, { useCallback } from 'react';
import { Checkbox } from '../checkbox/Checkbox'
import { CheckboxGroup } from '../checkbox/CheckboxGroup';
import './Cell3.css';

export const Cell3 = (props) => {

  const { onClick } = props

  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  return (
    <div className="cell3">
      <CheckboxGroup>
        <Checkbox
          value="A"
          text="Checkbox A"
          onClick={handleClick}
        />
        <Checkbox
          value="B"
          text="Checkbox B"
          onClick={handleClick}
        />
        <Checkbox
          value="C"
          text="Checkbox C"
          onClick={handleClick}
        />
        <Checkbox
          value="D"
          text="Checkbox D"
          onClick={handleClick}
        />
      </CheckboxGroup>
    </div>
  );
};
