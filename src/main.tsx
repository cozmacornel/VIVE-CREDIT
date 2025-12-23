import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./context/ThemeContext";
import store from "./store";

import "./styles/tailwind.css";
import "./styles/global.css";

import App from "./App";

console.log("Main.tsx loading...");

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Root element not found!");
} else {
  console.log("Root element found, mounting app...");
  createRoot(rootElement).render(
    <StrictMode>
      <HelmetProvider>
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      </HelmetProvider>
    </StrictMode>
  );
  console.log("App mounted!");
}


