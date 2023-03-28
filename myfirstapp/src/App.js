import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  const userInfo = {
    firstname: "Owolabi",
    lastname: "Olusegun",
  };

  return (
    <>
      <Welcome user="Owolabi" />
      <Welcome user="James" />
      <Welcome user="Owolabi" />
    </>
  );
}

export default App;
