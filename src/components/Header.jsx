import "./Header.css";
import logo from "../assets/Logosolviora.png";
import Contact from "./Contact";

export default function Header() {
  return (
    <header className="head">
      <img src={logo} alt="Solviora logo" height="50" className="head-logo" />
      <div className="nav-btns">
        <a href="#services" className="btn-nav">
          Services
        </a>
        <a href="#projects" className="btn-nav">
          Projects
        </a>
        <a href="#about" className="btn-nav">
          About Us
        </a>
        <a href="#contact" className="btn-nav">
          Contact
        </a>
      </div>
      <div className="head-cta">
        <button className="cta-btn">Lets solve</button>
      </div>
    </header>
  );
}
