import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Harrycomponent from "./Harrycomponent/Harrycomponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Air Polution Cheker App is coming up soon!</h1>
      <Harrycomponent />
    </>
  );
}

export default App;
