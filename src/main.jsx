import React from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import Home from "@/pages/Home";
import Test from "./Test";

const rootEl = document.querySelector("#root");
const root = createRoot(rootEl);
root.render(
  <React.StrictMode>
    {/* <Home /> */}
    <Test />
  </React.StrictMode>,
);
