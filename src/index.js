import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "jquery/dist/jquery.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
