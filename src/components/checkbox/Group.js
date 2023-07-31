import React from 'react';
import { PropTypes } from 'prop-types';
import { Checkbox } from './Checkbox';

export function Group({ options, optionsProperty }) {
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
          disabled
        />
        <Checkbox
          value={options[1].value}
          text={options[1].label}
          disabled
          checked
        />
        <Checkbox
          value={options[2].value}
          text={options[2].label}
          disabled
          indeterminate
        />
      </div>
    </div>
  );
}

Group.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  optionsProperty: PropTypes.any.isRequired,
};
