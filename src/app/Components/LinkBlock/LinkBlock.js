import "./LinkBlock.css";
import Hr from "../Hr/Hr";

function LinkBlock({ children, title, type }) {
  return (
    <div className="link-block">
      <p className="cv-title">
        {type === "education" ? (title = "education") : (title = "skills")}
      </p>
      <Hr className="in-line-hr">
        <div className="grey-hr"></div>
      </Hr>
      {children}
    </div>
  );
}

export default LinkBlock;
