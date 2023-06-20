import React from 'react';
import classnames from 'classnames';
import './Checkbox.css';

export class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked || false,
    };
  }

  handleCheckboxChange = () => {
    const { disabled, onChange } = this.props;
    if (!disabled) {
      const { checked } = this.state;
      const newChecked = !checked;
      this.setState({ checked: newChecked });
      if (onChange) {
        onChange(newChecked);
      }
    }
  };

  render() {
    const { text, disabled, indeterminate, checked: checkedProps } = this.props;
    const { checked: checkedState } = this.state;
    const checked = checkedProps || indeterminate || checkedState;

    const checkboxClasses = classnames('checkbox', {
      'checkbox-disabled': disabled,
    });

    const checkmarkClasses = classnames('checkmark', {
      'checkmark-disabled': disabled,
      'checkmark-indeterminate': indeterminate,
    });

    return (
      <label className={checkboxClasses}>
        <input type="checkbox" checked={checked} onChange={this.handleCheckboxChange} disabled={disabled} />
        <span className={checkmarkClasses}></span>
        {text && <span className="label">{text}</span>}
      </label>
    );
  }
}

export default Checkbox;