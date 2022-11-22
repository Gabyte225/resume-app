import "./select.css";

function Select({ className, options, onChange }) {
  const handleLanguage = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  return (
    <select className={className} onChange={handleLanguage}>
      {options.map((option, i) => (
        <option key={i} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
