import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ContextProvide from "./components/context/ContextProvide";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvide>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvide>
  </React.StrictMode>
);
