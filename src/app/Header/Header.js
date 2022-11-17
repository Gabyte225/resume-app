import "./Header.css";
import HeaderBox from "./Header-box";
import HeaderGreenBox from "./Header-green-box";

function Header({ className }) {
  return (
    <div className={className}>
      <HeaderGreenBox className="green-header-box">
        <option value="LT">Lietuviškai</option>
        <option value="EN">English</option>
      </HeaderGreenBox>
      <HeaderBox className="header-box">
        <p className="name-in-cv">Gabriele</p>
        <p className="education-title">programmer</p>
      </HeaderBox>
    </div>
  );
}

export default Header;
