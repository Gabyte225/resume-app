import "./SectionLinks.css";
import LinksAbout from "../LinkAbout/LinksAbout";

function SectionLinks({ className }) {
  return (
    <section className="links-about">
      <LinksAbout className="link-block" type="link"></LinksAbout>
      <LinksAbout className="link-block" type="about"></LinksAbout>
    </section>
  );
}

export default SectionLinks;
