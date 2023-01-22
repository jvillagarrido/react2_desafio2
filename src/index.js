import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
import FavoritosProvider from  "./context/FavoritosContext"

root.render(
  <StrictMode>
    <FavoritosProvider>
    <App />
    </FavoritosProvider>
  </StrictMode>
);
