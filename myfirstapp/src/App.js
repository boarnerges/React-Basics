import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import Clock from "./components/Clock";

function App() {
  const userInfo = {
    firstname: "Owolabi",
    lastname: "Olusegun",
  };

  return (
    <>
      <Clock />
      {/* <Welcome user="Owolabi" />
      <Welcome user="James" />
      <Welcome user="Owolabi" /> */}
    </>
  );
}

export default App;
