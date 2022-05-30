import React from "react";
// import ReactDom from "react-dom";
import ReactDOM from "react-dom/client";
import App from "./App";

// ReactDom.render(<App />, document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
  </div>
);
