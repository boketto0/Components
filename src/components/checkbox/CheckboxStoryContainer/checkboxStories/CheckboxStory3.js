import React, { useCallback } from 'react';
import { Checkbox } from '../../Checkbox';
import { CheckboxGroup } from '../../CheckboxGroup';
import './CheckboxStory3.css';
import { PropTypes } from 'prop-types';
import { CheckboxStory2 } from '.';

export function CheckboxStory3(props) {
  const { onClick } = props;

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
}

CheckboxStory3.propTypes = {
  onClick: PropTypes.func,
};
