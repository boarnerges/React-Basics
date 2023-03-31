import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import Clock from "./components/Clock";
import { useState } from "react";
import LoginControl from "./components/LoginControl";
import Blog from "./components/Blog";
import Form from "./components/Form";

function App() {
  // const [flag, setFlag] = useState(true);
  // const userInfo = {
  //   firstname: "Owolabi",
  //   lastname: "Olusegun",
  // };

  // const posts = [
  //   {
  //     id: 1,
  //     title: "Hello World",
  //     content: "Welcome to learning React!",
  //   },
  //   {
  //     id: 2,
  //     title: "Installation",
  //     content: "You can install React from npm",
  //   },
  //   {
  //     id: 3,
  //     title: "Run App",
  //     content: "You can run React app with npm start",
  //   },
  // ];
  // const toggle = () => {
  //   console.log("Toggle Clicked");
  //   setFlag(!flag);
  // };

  return (
    <>
      {/* <button onClick={() => setFlag(!flag)}>Toggle Clock Component</button>
      {flag ? <Clock /> : "No Clock component"}
      {/* <Welcome user="Owolabi" /> */}
      {/* <Welcome user="James" /> */}
      {/* <Welcome user="Owolabi" />  */}

      {/* <LoginControl /> */}
      {/* <Blog posts={posts} /> */}
      <Form />
    </>
  );
}

export default App;
