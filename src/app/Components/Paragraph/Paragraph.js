import "./Paragraph.css";

function Paragraph({ className, children, title }) {
  return (
    <p className={"paragraph".concat(" ", className)}>
      {children} {title}
    </p>
  );
}

export default Paragraph;
