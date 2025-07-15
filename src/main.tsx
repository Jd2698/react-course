import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { RoutesComponent } from "./components/RoutesComponent";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <RoutesComponent />
    </StrictMode>
  </BrowserRouter>
);
