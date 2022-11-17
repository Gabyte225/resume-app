import "./Hr.css";

function Hr({ className, children }) {
  return (
    <div className={className}>
      <div className="green-hr"></div>
      {children}
    </div>
  );
}

export default Hr;
