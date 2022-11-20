import "./Header.css";

function HeaderBox({ className, children }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export default HeaderBox;
