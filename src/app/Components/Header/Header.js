import "./Header.css";
import Select from "../Select/select";
import languages from "../../languages.json";

function Header({ className, onChange, language }) {
  return (
    <div className={className}>
      <div className="green-header-box">
        <Select
          className="select-languages"
          onChange={onChange}
          options={[
            {
              label: "Lietuviškai",
              value: "lt",
            },
            {
              label: "English",
              value: "en",
            },
          ]}
        />
      </div>
      <div className="header-box">
        <p className="name-in-cv">Gabriele</p>
        <p className="education-title">{languages[language].header.jobTitle}</p>
      </div>
    </div>
  );
}

export default Header;
