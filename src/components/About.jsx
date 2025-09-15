import "./About.css";
import logo from "../assets/Logosolviora.png";
import smallteam from "../assets/smallteam.png";
import established from "../assets/established.png";
import basedin from "../assets/basedin.png";

export default function About() {
  return (
    <>
      <div className="about" id="about">
        <h1 className="about-header">About Us</h1>{" "}
        <div className="about-first">
          <p className="about-first-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse minus
            dolor qui, voluptas facilis sequi in laboriosam velit, aliquam culpa
            quibusdam repudiandae facere odit cumque vel, ducimus atque illo
            inventore.
          </p>
          <div className="about-first-2ndcol">
            <img className="about-first-image" src={logo} alt="Opis slike" />
            <h1 className="about-title">SOLVIORA</h1>
          </div>
        </div>
        <div className="about-third">
          <div className="about-third-card">
            <img
              className="about-card-image"
              src={established}
              alt="Opis slike"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              dolorum mollitia earum ex amet enim excepturi itaque numquam
              facere iusto at quo omnis quos possimus pariatur non, ut totam?
              Harum!
            </p>
          </div>
          <div className="about-third-card">
            <img className="about-card-image" src={basedin} alt="Opis slike" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              dolorum mollitia earum ex amet enim excepturi itaque numquam
              facere iusto at quo omnis quos possimus pariatur non, ut totam?
              Harum!
            </p>
          </div>
          <div className="about-third-card">
            <img
              className="about-card-image"
              src={smallteam}
              alt="Opis slike"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              dolorum mollitia earum ex amet enim excepturi itaque numquam
              facere iusto at quo omnis quos possimus pariatur non, ut totam?
              Harum!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
