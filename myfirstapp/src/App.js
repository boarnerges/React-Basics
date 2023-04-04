import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import Clock from "./components/Clock";
import { useState } from "react";
import LoginControl from "./components/LoginControl";
import Blog from "./components/Blog";
import Form from "./components/Form";
import Search from "./components/Search";
import List from "./components/List";
import WelcomeDialog from "./components/WelcomeDialog";

function App() {
  // const [flag, setFlag] = useState(true);
  // const userInfo = {
  //   firstname: "Owolabi",
  //   lastname: "Olusegun",
  // };
  const [searchTerm, setSearchTerm] = useState();
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const posts = [
    {
      id: 1,
      title: "Hello World",
      content: "Welcome to learning React!",
    },
    {
      id: 2,
      title: "Installation",
      content: "You can install React from npm",
    },
    {
      id: 3,
      title: "Run App",
      content: "You can run React app with npm start",
    },

    {
      id: 4,
      title: "Build Components",
      content: "You can run React app with npm start",
    },

    {
      id: 5,
      title: "Define States",
      content: "You can run React app with npm start",
    },

    {
      id: 3,
      title: "React Hooks",
      content: "You can run React app with npm start",
    },

    {
      id: 3,
      title: "Forms handling",
      content: "You can run React app with npm start",
    },
  ];

  const filterList = posts.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm);
  });

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
      {/* <Form /> */}
      {/* <Search searchTerm={searchTerm} handleSearch={handleSearch} />
      <List list={filterList} /> */}
      <WelcomeDialog />
    </>
  );
}

export default App;
