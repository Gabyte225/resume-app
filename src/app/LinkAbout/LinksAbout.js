import "./LinksAbout.css";
import Hr from "../Hr/Hr";
import IconBlock from "../IconBlock/Icon";

function LinksAbout({ className, type }) {
  return (
    <div className={className} type={type}>
      {type === "link" ? (
        <p className="cv-title">links</p>
      ) : (
        <p className="cv-title">about</p>
      )}

      <Hr className="in-line-hr">
        {type === "link" ? (
          <div className="grey-hr"></div>
        ) : (
          <div className="grey-hr-long"></div>
        )}
      </Hr>
      {type === "link" ? (
        <IconBlock className="inline-icon-block"></IconBlock>
      ) : (
        <p className="about-me">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          culpa praesentium quam sed dolorem laborum dolor tempore? Cum, ducimus
          autem, saepe est obcaecati ratione optio placeat voluptatibus,
          distinctio quia animi error harum. Tempora id hic natus exercitationem
          dolore molestiae adipisci, veritatis aperiam sint eius. Modi
          voluptatum tenetur, officia repudiandae ullam non vitae illum delectus
          dolor laboriosam id omnis dicta dolores in, fuga deserunt libero
          ducimus eos fugiat, quaerat nam. Facere libero neque, dolorum quidem
          eum est ad accusamus suscipit molestias impedit, provident dolore
          accusantium ipsum ipsa incidunt voluptatibus sed earum. Aut in vel ea
          voluptatibus tempora? Id odit minus rem ipsam illum laboriosam,
          voluptas harum iste ratione velit iusto, sapiente praesentium fuga
          suscipit incidunt!
        </p>
      )}
    </div>
  );
}

export default LinksAbout;
