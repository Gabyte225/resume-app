import "./select.css";

function Select({ className, children }) {
  return (
    <select className={className} name>
      {children}
    </select>
  );
}

export default Select;
