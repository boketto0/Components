import React, { useCallback } from 'react';
import { Checkbox } from '../../Checkbox'
import { CheckboxGroup } from '../../CheckboxGroup';
import './CheckboxStory3.css';

export const CheckboxStory3 = (props) => {

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
          value="A" // TODO: В компоненте нет пропса value
          text="Checkbox A"
          checked
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
          checked
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
