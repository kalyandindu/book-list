import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { BookProvider } from "./context/bookContext";

const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);

root.render(
  <BookProvider>
    <App />
  </BookProvider>
);
