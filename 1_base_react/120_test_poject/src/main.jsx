import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Header } from "./App.jsx";

/* const elem = <h2>Hello World!</h2>;

const elem = React.createElement(
  "h2",
  { className: "greetings" },
  "Hello World!"
);

const element = {
  type: "h1",
  props: {
    className: "greeting",
    children: "Hello World!",
  },
}; */

/* const text = "Hello World!";

const elem = (
  <div>
    <div className="text">"Hello World!"</div>
    <div>TEXT: {text}</div>
    <div>Data: {new Data()}</div>
    <div>Data: {["Sue", "Alex"]}</div>
    <label htmlFor=""></label>
    <input type="text" />
    <button tabIndex="0">Click</button>
    <button />
  </div>
);*/

/* createRoot(document.getElementById("root")).render(elem); */

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Header />
  </StrictMode>
);
