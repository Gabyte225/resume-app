import "./select.css";

function Select({ className, name = "languages", children }) {
  return (
    <select className={className} name>
      {children}
    </select>
  );
}

export default Select;
