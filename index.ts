import { createRoot } from "react-dom/client";
import { StrictMode, createElement } from "react";
import { App } from "./App";
import "./index.css";

createRoot(document.getElementById("root") as HTMLDivElement).render(createElement(StrictMode, null, createElement(App)));
