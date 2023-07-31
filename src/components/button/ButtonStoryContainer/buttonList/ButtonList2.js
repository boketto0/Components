<<<<<<< HEAD
import './ButtonList2.css';
import React, { useState } from 'react';
import { ButtonType, ButtonSize, Button } from '../../Button';
import { IconButton, IconButtonSize } from '../..';
import Icon from '../../../../assets/images/Vector.svg';
=======
import './ButtonList2.css'
import { ButtonType, ButtonSize, Button } from '../../Button'
import { useState } from 'react'
import { IconButton, IconButtonSize } from '../..'
import Icon from '../../../../assets/images/Vector.svg'
import React from 'react';
>>>>>>> 7c08ad1 (везде добавлена проверка типов, добавлен key в map)

export function ButtonList2() {
  const [size, setSize] = useState(ButtonSize.SMALL);

  const [isLoading] = useState(false);

  const pressed = '';
  const disabled = '';
  const selected = '';

  const sizes = [
    { type: ButtonSize.SMALL || IconButtonSize.SMALL, text: 'Small' },
    { type: ButtonSize.MEDIUM || IconButtonSize.MEDIUM, text: 'Medium' },
    { type: ButtonSize.LARGE || IconButtonSize.LARGE, text: 'Large' },
  ];

<<<<<<< HEAD
  return (
    <div>
      <div className="size-divider">
        {
=======
    const sizes = [
        {type: ButtonSize.SMALL || IconButtonSize.SMALL, text: "Small"},
        {type: ButtonSize.MEDIUM || IconButtonSize.MEDIUM, text: "Medium"},
        {type: ButtonSize.LARGE || IconButtonSize.LARGE, text: "Large"}
    ]

    return (
        <div>
            <div className='size-divider'>
                {
>>>>>>> 7c08ad1 (везде добавлена проверка типов, добавлен key в map)
                    sizes.map((el, index) => <div key={index} onClick={() => setSize(el.type)}>{el.text}</div>)
                }
      </div>
      <div className="buttons-container">
        <div className="buttonlist2-container">
          <Button colored="pressed" size={size} text="Primary Button" type={ButtonType.PRIMARY} />
          <Button colored="pressed" size={size} text="Default" type={ButtonType.SECONDARY} />
          <Button colored="selected" size={size} text="Link" type={ButtonType.LINK} />
        </div>
        <div className="buttonlist2-container">
          <IconButton icon={<img src={Icon} />} colored="pressed" size={size} />
          <IconButton icon={<img src={Icon} />} colored="pressed" size={size} icon_round />
        </div>
        <div className="buttonlist2-container">
          <Button colored="pressed" icon={<img src={Icon} />} round size={size} type={ButtonType.PRIMARY} />
          <Button icon={<img src={Icon} />} colored="pressed" round size={size} text="Download" type={ButtonType.PRIMARY} />
          <Button icon={<img src={Icon} />} colored="pressed" size={size} text="Download" type={ButtonType.PRIMARY} />
        </div>
      </div>
    </div>
  );
}
