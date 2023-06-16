import './Checkbox.css';

const Checkbox = (props) => {
  const { text, disabled, checked, onChange } = props;

  const handleCheckboxChange = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <label className={`checkbox ${disabled ? 'disabled' : ''}`}>
      <input type="checkbox" checked={checked} onChange={handleCheckboxChange} disabled={disabled} />
      <span className={`checkmark checkmark-${disabled ? 'disabled' : ''}`}></span>
      {text && <span className="label">{text}</span>}
    </label>
  );
};

export default Checkbox;