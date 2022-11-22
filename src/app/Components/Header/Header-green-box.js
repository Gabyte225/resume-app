// import "./Header.css";
// import Select from "../Select/select";
// import { useState } from "react";
// import languages from "../../languages.json";

// function HeaderGreenBox({ className }) {
//   const options = [
//     {
//       label: "Lietuviškai",
//       value: "lt",
//     },
//     {
//       label: "English",
//       value: "en",
//     },
//   ];
//   const [language, setLanguage] = useState("");

//   return (
//     <div className={className}>
//       <Select
//         className="select-languages"
//         onChange={() => setLanguage(options.value)}
//       >
//         {options.map((option) => (
//           <option value={option.value}>{option.label}</option>
//         ))}
//       </Select>
//       <div className="header-box">
//         <p className="name-in-cv">Gabriele</p>
//         <p className="education-title">{languages[language].header.jobTitle}</p>
//       </div>
//     </div>
//   );
// }

// export default HeaderGreenBox;
