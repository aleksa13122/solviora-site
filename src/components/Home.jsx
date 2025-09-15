import "./Home.css";
import { ReactTyped } from "react-typed";
import { ArrowDownCircle } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/Logosolviora.png";

export default function RotatingHeadline() {
  return (
    <div className="hero">
      <div className="hero-first">
        <img className="hero-image" src={logo} alt="logo" />
        <h1 className="hero-title">SOLVIORA</h1>
      </div>
      <h1 className="hero-moto">
        Handcrafted <span className="header-word">Solutions </span>
        <br></br>
        {""} for maximum<br></br>
        {""}
        <ReactTyped
          className="header-word"
          strings={[
            "Efficiency",
            "Scalability",
            "Profitability",
            "Innovation",
            "Performance",
            "Engagement",
          ]}
          typeSpeed={80}
          backSpeed={50}
          loop
        />
      </h1>
      <div className="arrow-scroll">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="cursor-pointer"
          onClick={() => {
            const el = document.getElementById("services");
            window.scrollTo({
              top: el.offsetTop - 140,
              behavior: "smooth",
            });
          }}
        >
          <ArrowDownCircle />
        </motion.div>
      </div>
    </div>
  );
}
