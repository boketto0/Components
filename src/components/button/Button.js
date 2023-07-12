import React, { useCallback, useEffect } from 'react';
import classnames from 'classnames';
import "./Button.css";
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
  const { size, type = ButtonType.PRIMARY, text, disabled, onClick } = props;

  const buttonClasses = classnames(
    'button',
    type && `button-${type}`,
    size &&`button-${size}`,
    `button-${type}__${disabled}`,
    `button-text__${type}__${disabled}`
  );

  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  return (
    <div className={buttonClasses} onClick={handleClick}>
        <div className='button-content'>
            {text && <span className={`button-text button-text__${type}__${disabled ? 'disabled' : ''}`}>{text}</span>}
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


