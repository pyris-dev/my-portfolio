import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./app/App";

// Ensure the root element exists before creating the root
const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");

// Create root and render the application
createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
