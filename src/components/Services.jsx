import "./Services.css";
import logo from "../assets/Logosolviora.png";

export default function Services() {
  return (
    <>
      <div className="services-intro" id="services">
        <h1 className="services-intro-header">Services</h1>
        <p className="services-intro-text">
          From idea to finished solution – we build and maintain digital
          experiences that work for your business.We handle the tech, so you can
          focus on growing your revenue.
        </p>
      </div>
      <div className="services-showcase">
        <div className="services-showcase-text">
          <h4>WAAS</h4>
          <p className="services-text">
            Modern, responsive websites delivered on a simple subscription
            model. We design, host, and maintain your site so you can focus on
            growing your business.{" "}
          </p>
          <button className="cta-btn">WAAS projects</button>
        </div>
        <div className="services-showcase-card">
          <img src={logo} alt="Opis slike" />
        </div>
        <div className="services-showcase-card"></div>
        <div className="services-showcase-text">
          <h4>Branding & Identity (Coming Soon)</h4>
          <p className="services-text brand">
            Build a strong brand presence with custom logos, color palettes, and
            visual systems that make your business instantly recognizable.{" "}
          </p>
          <button className="cta-btn">Branding projects</button>
        </div>
        <div className="services-showcase-text">
          <h4>AI Automation (Coming Soon)</h4>
          <p className="services-text">
            Leverage AI to automate customer support, content creation, and
            business workflows. Save time, cut costs, and scale smarter.{" "}
          </p>
          <button className="cta-btn">Automation projects</button>
        </div>
        <div className="services-showcase-card"></div>
      </div>
    </>
  );
}
