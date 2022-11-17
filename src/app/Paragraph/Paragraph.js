import "./Paragraph.css";

function Paragraph({ className, children }) {
  return <p className={"paragraph".concat(" ", className)}>{children}</p>;
}

export default Paragraph;
