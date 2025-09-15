import "./Contact.css";
import logo from "../assets/Logosolviora.png";

export default function Contact() {
  return (
    <div className="contacts" id="contact">
      <div className="contacts-column first">
        <div className="contacts-header">SOLVIORA</div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat sunt
          in
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat sunt
          in
        </p>
      </div>

      <div className="contacts-column-second services">
        <p className="contacts-header-small">SERVICES</p>
        <li>
          <a href="#waas">waas</a>
        </li>
        <li>
          <a href="#branding">branding</a>
        </li>
        <li>
          <a href="#ai">ai</a>
        </li>
      </div>
      <div className="contacts-column-second">
        <p className="contacts-header-small">CONTACTS</p>
        <a>email</a>
        <a>phone number</a>
        <a>location</a>
      </div>
    </div>
  );
}
