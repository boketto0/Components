import { Group } from '../../Group';
import React from 'react';

export const CheckboxStory6 = () => {
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' }
  ];

  const optionsProperty = [
    { disabled: false },
    { disabled: true, checked: true },
    { disabled: true, indeterminate: true }
  ];

  return (
    <div className="cell6">
      <Group options={options} optionsProperty={optionsProperty} />
    </div>
  );
};