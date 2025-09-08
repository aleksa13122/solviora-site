import "./Projects.css";
import logo from "../assets/Logosolviora.png";

export default function Projects() {
  return (
    <>
      <div className="projects-intro">
        <h1 className="projects-header">Projects</h1>
        <p>Take a look at our projects</p>
      </div>
      <div className="projects-showcase">
        <div className="project">
          <img src={logo} alt="Opis slike" />
          <div className="project-text">Project text</div>
        </div>
        <div className="project">
          <img src={logo} alt="Opis slike" />
          <div className="project-text">Project text</div>
        </div>
        <div className="project">
          <img src={logo} alt="Opis slike" />
          <div className="project-text">Project text</div>
        </div>
      </div>
    </>
  );
}
