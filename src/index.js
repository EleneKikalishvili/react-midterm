import React from "react";
import ReactDOM from "react-dom";
import AuthProtected from "./context/context";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <AuthProtected>
      <App />
    </AuthProtected>
  </React.StrictMode>,
  document.getElementById("root")
);
