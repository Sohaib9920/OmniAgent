import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { AlertProvider } from "./contexts/alertContext.tsx";
import { LocationProvider } from "./contexts/locationContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <LocationProvider>
      <AlertProvider>
        <App />
      </AlertProvider>
    </LocationProvider>
  </BrowserRouter>
);
