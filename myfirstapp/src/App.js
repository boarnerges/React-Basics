import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import Clock from "./components/Clock";
import { useState } from "react";

function App() {
  const [flag, setFlag] = useState(true);
  const userInfo = {
    firstname: "Owolabi",
    lastname: "Olusegun",
  };

  const toggle = () => {
    console.log("Toggle Clicked");
  };

  return (
    <>
      <button onClick={toggle}>Toggle Clock Component</button>
      <Clock />
      {/* <Welcome user="Owolabi" />
      <Welcome user="James" />
      <Welcome user="Owolabi" /> */}
    </>
  );
}

export default App;
