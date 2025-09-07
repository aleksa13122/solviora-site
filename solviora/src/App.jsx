import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Home></Home>
      <Services></Services>
    </>
  );
}

export default App;
