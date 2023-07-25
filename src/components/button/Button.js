import { Loader } from '../loader/Loader';
import { getColor } from './utils';
import classnames from 'classnames';
import { useCallback } from 'react';
import './Button.css'
import { PropTypes } from 'prop-types';

export const ButtonSize = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large"
}

export const ButtonType = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  LINK:'link',
  TEXT:'text',
}

export const Button = (props) => {
  const { size, type = ButtonType.PRIMARY, text, disabled, colored, round, onClick, isLoading, icon } = props;

  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  const buttonClasses = classnames(
    `button`,
    type && `button-${type}`,
    size &&`button-${size}`,
    `button-${type}__${disabled}`,
    colored && `button-${type}__${colored}`,
    colored && `text__${type}__${colored}`,
    `icon__${type}__${colored}`,
    { 'button-round': round }
  );

  const loaderColor = getColor(type, colored);

  return (
    <div className={buttonClasses} onClick={handleClick}>
      <div className='button-content'>
          {icon && <span className={`icon icon__${type}__${colored}`}>{icon}</span>}
          {text && <span className={`text text__${type}__${disabled ? 'disabled' : ''}`}>{text}</span>}
          {isLoading && (<Loader color={loaderColor} type={type}/>)}
      </div>
    </div>
    
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(Object.values(ButtonSize)),
  type: PropTypes.oneOf(Object.values(ButtonType)),
  text: PropTypes.string,
  icon: PropTypes.node,
  round: PropTypes.bool,
  isLoading: PropTypes.bool
};




