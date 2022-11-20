import "./Icon.css";
/* eslint-disable jsx-a11y/alt-text */
import LinkedIn from "../../icon/Linked-in.png";
import Twitter from "../../icon/Twitter.png";
import Github from "../../icon/Github.png";
import Dev from "../../icon/DEV.png";
import Paragraph from "../Paragraph/Paragraph";

function IconBlock({ className }) {
  return (
    <div className={className}>
      <div className="in-line-icon">
        <img className="icon" src={LinkedIn} />
        <Paragraph>LINKEDIN/username</Paragraph>
      </div>
      <div className="in-line-icon">
        <img className="icon" src={Twitter} />
        <Paragraph>TWITTER/username</Paragraph>
      </div>
      <div className="in-line-icon">
        <img className="icon" src={Github} />
        <Paragraph>GITHUB/username</Paragraph>
      </div>
      <div className="in-line-icon">
        <img className="icon" src={Dev} />
        <Paragraph>DEV/username</Paragraph>
      </div>
    </div>
  );
}

export default IconBlock;
