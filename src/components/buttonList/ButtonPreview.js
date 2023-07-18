import React, { useState } from 'react';
import './ButtonPreview.css';
import { Button, ButtonType, ButtonSize} from '../button/Button';
import { IconButton } from '../button';
import { Loader } from '../Loader';

export const ButtonPreview = () => {

  const [size, setSize] = useState(ButtonSize.SMALL);
  const [type, setType] = useState(ButtonType.PRIMARY);
  const [colored, setColored] = useState('');
  const [round, setRound] = useState(false);
  const [icon_round, setIconRound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [selected, setSelected] = useState(false);

  const sizes = [
    { type: ButtonSize.SMALL, text: 'Small' },
    { type: ButtonSize.MEDIUM, text: 'Medium' },
    { type: ButtonSize.LARGE, text: 'Large' }
  ];

  const types = [
    { type: ButtonType.PRIMARY, text: 'Primary' },
    { type: ButtonType.SECONDARY, text: 'Secondary' },
    { type: ButtonType.LINK, text: 'Link' },
    { type: ButtonType.TEXT, text: 'Text' }
  ];

  const handleSizeClick = (selectedSize) => {
    setSize(selectedSize);
  };

  const handleTypeClick = (selectedType) => {
    setType(selectedType);
  };

  const handleColorClick = (selectedColor) => {
    switch (selectedColor) {
      case 'pressed':
        setPressed(!pressed);
        break;
      case 'selected':
        setSelected(!selected);
        break;
      case 'disabled':
        setDisabled(!disabled);
        break;
      default:
        break;
    }
  };

  const handleRoundSet = () => {
    setRound(!round);
    setIconRound(!icon_round)
  }

  const handleLoaderClick = () => {
    setIsLoading(!isLoading);
  }


  return (
    <div className='preview'>
      <div className='preview-title'>Preview</div>
      <div className='buttons-design'>
        <Button icon={isLoading ? <Loader/> : '+'} round={round} size={size} type={type} text={'Button'} colored={colored} />
        <IconButton icon_round={icon_round} size={size} type={type} icon={isLoading ? <Loader/> : '+'} colored={colored}/>
      </div>
      <div>Свойства</div>
      <div className='list-block'>
          <div className='list'>
            {sizes.map((el) => (
                <div className='text-design' onClick={() => handleSizeClick(el.type)}>{el.text}</div>
            ))}
          </div>
          <div className='list'>
            {types.map((el) => (
                <div className={`text-design ${el.type === type ? 'active' : ''}`} onClick={() => handleTypeClick(el.type)}>{el.text}</div>
            ))}
          </div>
          <div cclassName='list'>
          <div
            className={`text-design ${
              pressed ? 'active' : ''
            }`}
            onClick={() => handleColorClick('pressed')}
          >
            Pressed
          </div>
          <div
            className={`text-design ${
              selected ? 'active' : ''
            }`}
            onClick={() => handleColorClick('selected')}
          >
            Selected
          </div>
          <div
            className={`text-design ${
              disabled ? 'active' : ''
            }`}
            onClick={() => handleColorClick('disabled')}
          >
            Disabled
          </div>
          </div>
          <div className='list'>
                <div className={`text-design ${round ? 'active' : ''}`} onClick={() => handleRoundSet()}>round</div>
                <div className={`text-design ${isLoading ? 'true' : ''}`} onClick={() => handleLoaderClick()}>loader</div>
          </div>
      </div>
    </div>
  );
}