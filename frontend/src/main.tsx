import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import ContextWrapper from "./contexts/index.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ContextWrapper>
      <App />
    </ContextWrapper>
  </BrowserRouter>
);
