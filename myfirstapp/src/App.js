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
    setFlag(!flag);
  };

  return (
    <>
      <button onClick={() => setFlag(!flag)}>Toggle Clock Component</button>
      {flag ? <Clock /> : "No Clock component"}
      {/* <Welcome user="Owolabi" />
      <Welcome user="James" />
      <Welcome user="Owolabi" /> */}
    </>
  );
}

export default App;
