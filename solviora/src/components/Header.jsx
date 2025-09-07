import "./Header.css";
import logo from "../assets/Logo solviora.png";

export default function Header() {
  return (
    <header className="head">
      <img src={logo} alt="Solviora logo" height="50" className="head-logo" />
      <div className="nav-btns">
        <button className="btn-nav">Services</button>
        <button className="btn-nav">Projects</button>
        <button className="btn-nav">About Us</button>
        <button className="btn-nav">Contact</button>
      </div>
      <div className="head-cta">
        <button className="cta-btn">Lets solve</button>
      </div>
    </header>
  );
}
