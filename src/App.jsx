import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Home></Home>
      <Services></Services>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
    </>
  );
}

export default App;
