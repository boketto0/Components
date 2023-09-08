<<<<<<< HEAD
import './ButtonList4.css';
import React from 'react';
import { ButtonType, Button } from '../../Button';
import { ButtonSize } from '../..';
=======
import './ButtonList4.css'
import { ButtonType, Button } from '../../Button'
import { ButtonSize } from '../..'
import React from 'react';
>>>>>>> 7c08ad1 (везде добавлена проверка типов, добавлен key в map)

export function ButtonList4() {
  return (
    <div>
      <div className="buttons-container">
        <div className="buttonlist4-container">
          <Button colored="pressed" type={ButtonType.PRIMARY} size={ButtonSize.MEDIUM} text="Primary" />
          <Button colored="disabled" type={ButtonType.PRIMARY} size={ButtonSize.MEDIUM} text="Disabled" />
        </div>
        <div className="buttonlist4-container">
          <Button colored="pressed" type={ButtonType.SECONDARY} size={ButtonSize.MEDIUM} text="Default" />
          <Button colored="disabled" type={ButtonType.SECONDARY} size={ButtonSize.MEDIUM} text="Disabled" />
        </div>
        <div className="buttonlist4-container">
          <Button colored="pressed" type={ButtonType.TEXT} text="Text" />
          <Button colored="disabled" type={ButtonType.TEXT} text="Text disabled" />
        </div>
        <div className="buttonlist4-container">
          <Button colored="pressed" type={ButtonType.LINK} text="Link" />
          <Button colored="disabled" type={ButtonType.LINK} text="Link disabled" />
        </div>
      </div>
    </div>
  );
}
