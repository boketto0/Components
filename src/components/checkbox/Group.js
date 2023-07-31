import React from 'react';
import { Checkbox } from '../checkbox/Checkbox';
import { PropTypes } from 'prop-types';

export const Group = ({ options, optionsProperty }) => {
  return (
    <div className="checkbox-group">
      <div>
        {options.map((option, index) => (
          <Checkbox
            key={index}
            value={option.value}
            text={option.label}
            disabled={false}
          />
        ))}
      </div>
      <div>
        {options.map((option, index) => (
          <Checkbox
            key={index}
            value={option.value}
            text={option.label}
            disabled={false}
          />
        ))}
      </div>
      <div>
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

Group.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.any.isRequired,
            label: PropTypes.string.isRequired
        })
    ).isRequired,
    optionsProperty: PropTypes.any.isRequired
}