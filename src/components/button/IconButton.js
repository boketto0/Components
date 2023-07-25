import classnames from 'classnames';
import "./IconButton.css";
import { PropTypes } from 'prop-types';
import { Loader } from '../loader/Loader';

export const IconButtonSize = {
    SMALL: "small",
    MEDIUM: "medium",
    LARGE: "large"
}

export const IconButtonType = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    LINK: "link",
    TEXT: "link"
}

export const IconButton = (props) => {
    const { size, icon, type = IconButtonType.PRIMARY, colored, icon_round, isLoading } = props;
  
    const buttonClasses = classnames(
      'icon-button',
      size && `icon-button__${size}`,
      colored && `icon-button__${type}__${colored}`,
      { 'icon-button__round' : icon_round},
      colored && `icon__${type}__${colored}`
    );
  
    return (
      <div className={buttonClasses}>
        {isLoading && (<div className={`icon-button-loader ${colored}`}> 
        <Loader colored={colored} type={type}/></div>)}
        <span>
            {icon && <div className={`icon__${type}__${colored}`}>{icon}</div>}
        </span>
      </div>
    );
  };
  
  IconButton.propTypes = {
    size: PropTypes.oneOf(Object.values(IconButtonSize)),
    icon: PropTypes.node,
    colored: PropTypes.oneOf(['pressed', 'disabled', 'selected']),
    icon_round: PropTypes.bool
  };
  