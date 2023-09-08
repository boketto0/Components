import './CheckboxStory2.css';
import React from 'react';
import { Checkbox } from '../../Checkbox';

export function CheckboxStory2() {
  const disabled = '';

  return (
    <div className="cell1">
      <Checkbox disabled />
      <Checkbox checked disabled />
      <Checkbox indeterminate disabled />
    </div>
  );
}
