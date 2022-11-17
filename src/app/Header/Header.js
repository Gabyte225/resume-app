import "./Header.css";

function Header({ children }) {
  return (
    <header>
        <div className="header-flex">
          {children}
        </div>
      </header>
  );
}

export default Header;