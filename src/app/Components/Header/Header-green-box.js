import "./Header.css";
import Select from "../Select/select";

function HeaderGreenBox({ className, children }) {
  return (
    <div className={className}>
      <Select className="select-languages">{children}</Select>
    </div>
  );
}

export default HeaderGreenBox;
