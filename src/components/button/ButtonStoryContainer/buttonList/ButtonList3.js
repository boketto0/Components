import './ButtonList3.css';
import React from 'react';
import { ButtonType, Button, ButtonSize } from '../../Button';
import Icon from '../../../../assets/images/Vector.svg';
import { IconButton, IconButtonSize, IconButtonType } from '../..';

export function ButtonList3() {
  return (
    <div>
      <div className="button-container">
        <IconButton colored="pressed" size={IconButtonSize.SMALL} type={IconButtonType.PRIMARY} icon={<img src={Icon} />} icon_round />
        <IconButton colored="pressed" size={IconButtonSize.SMALL} type={IconButtonType.PRIMARY} icon="A" icon_round />
        <Button colored="pressed" size={ButtonSize.SMALL} type={ButtonType.PRIMARY} icon={<img src={Icon} />} text="Search" />
        <IconButton colored="pressed" size={IconButtonSize.SMALL} type={IconButtonType.PRIMARY} icon={<img src={Icon} />} icon_round />
        <IconButton colored="pressed" size={IconButtonSize.SMALL} type={IconButtonType.SECONDARY} icon="A" icon_round />
        <Button colored="pressed" size={ButtonSize.SMALL} type={ButtonType.SECONDARY} icon="+" text="Search" />
        <IconButton colored="pressed" size={IconButtonSize.SMALL} type={IconButtonType.SECONDARY} icon="A" icon_round />
      </div>
    </div>
  );
}
