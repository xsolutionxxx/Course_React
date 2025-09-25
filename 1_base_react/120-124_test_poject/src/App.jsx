import React from "react";
import { Component } from "react";
/* import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */
import "./App.css";

const Header = () => {
  return <h2>Hello World!</h2>;
};

/* const Field = () => {
  const holder = "Enter here";
  const styledField = {
    width: "300px",
  };
  return <input placeholder={holder} type="text" style={styledField} />;
}; */

class Field extends Component {
  render() {
    const holder = "Enter here";
    const styledField = {
      width: "300px",
    };

    return <input placeholder={holder} type="text" style={styledField} />;
  }
}

function Btn() {
  const text = "Log in";
  const logged = false;

  /* const res = () => {
    return "Log in";
  }; */
  /* const p = <p>Log out</p>; */

  return <button>{logged ? "Enter" : text}</button>;
}

function App() {
  /* const [count, setCount] = useState(0); */

  return (
    <>
      <Header />
      <Field />
      <Btn />
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export { Header };
export default App;
