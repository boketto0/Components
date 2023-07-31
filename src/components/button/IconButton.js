import classnames from 'classnames';
import './IconButton.css';
import { PropTypes } from 'prop-types';
import React from 'react';
import { Loader } from '../loader/Loader';
import { getColor } from './utils';

export const IconButtonSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

export const IconButtonType = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  LINK: 'link',
  TEXT: 'link',
};

export function IconButton(props) {
  const {
    size, icon, type = IconButtonType.PRIMARY, colored, icon_round, isLoading,
  } = props;

  const buttonClasses = classnames(
    'icon-button',
    size && `icon-button__${size}`,
    colored && `icon-button__${type}__${colored}`,
    { 'icon-button__round': icon_round },
    colored && `icon__${type}__${colored}`,
  );

  const loaderColor = getColor(type, colored);

  return (
    <div className={buttonClasses}>
      <div className="loader">
        {isLoading && (<Loader color={loaderColor} type={type} />)}
      </div>
      <span>
        {icon && <div className={`icon__${type}__${colored}`}>{icon}</div>}
      </span>
    </div>
  );
}

IconButton.propTypes = {
  size: PropTypes.oneOf(Object.values(IconButtonSize)),
  icon: PropTypes.node,
  colored: PropTypes.oneOf(['pressed', 'disabled', 'selected']),
  icon_round: PropTypes.bool,
  type: PropTypes.oneOf(Object.values(IconButtonType)),
  isLoading: PropTypes.bool,
};
