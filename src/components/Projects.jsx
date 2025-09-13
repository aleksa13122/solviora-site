import "./Projects.css";
import logo from "../assets/Logosolviora.png";

export default function Projects() {
  return (
    <>
      <div className="projects-intro">
        <h1 className="projects-header">Projects</h1>
        <p className="projects-intro-text">Take a look at our projects</p>
      </div>
      <div className="projects-showcase">
        <div className="project">
          <img className="project-image" src={logo} alt="Opis slike" />
          <h5 className="project-title">Project name </h5>
          <div className="project-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quae
            tenetur sequi, excepturi beatae fuga esse debitis exercitationem
            minus, reprehenderit sunt? Delectus distinctio dolores sunt non illo
            quod nulla consectetur.
          </div>
        </div>
        <div className="project">
          <img className="project-image" src={logo} alt="Opis slike" />
          <h5 className="project-title">Project name </h5>
          <div className="project-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quae
            tenetur sequi, excepturi beatae fuga esse debitis exercitationem
            minus, reprehenderit sunt? Delectus distinctio dolores sunt non illo
            quod nulla consectetur.
          </div>
        </div>
        <div className="project">
          <img className="project-image" src={logo} alt="Opis slike" />
          <h5 className="project-title">Project name </h5>
          <div className="project-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quae
            tenetur sequi, excepturi beatae fuga esse debitis exercitationem
            minus, reprehenderit sunt? Delectus distinctio dolores sunt non illo
            quod nulla consectetur.
          </div>
        </div>
        <div className="project">
          <img className="project-image" src={logo} alt="Opis slike" />
          <h5 className="project-title">Project name </h5>
          <div className="project-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quae
            tenetur sequi, excepturi beatae fuga esse debitis exercitationem
            minus, reprehenderit sunt? Delectus distinctio dolores sunt non illo
            quod nulla consectetur.
          </div>
        </div>
        <div className="project">
          <img className="project-image" src={logo} alt="Opis slike" />
          <h5 className="project-title">Project name </h5>
          <div className="project-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quae
            tenetur sequi, excepturi beatae fuga esse debitis exercitationem
            minus,
          </div>
        </div>
        <div className="project">
          <img className="project-image" src={logo} alt="Opis slike" />
          <h5 className="project-title">Project name </h5>
          <div className="project-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quae
            tenetur sequi, excepturi beatae fuga esse debitis exercitationem
            minus,
          </div>
        </div>
      </div>
    </>
  );
}
