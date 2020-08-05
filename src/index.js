import React from "react";
import ReactDOM from "react-dom";
import "./assets/main.css";
import App from "./App";
import { getFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
