import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { initPromise } from "./i18n";
import "./styles/index.css";

const hideLoadingScreen = () => {
  const loadingScreen = document.getElementById("loading-screen");
  if (loadingScreen) {
    loadingScreen.classList.add("hidden");
    setTimeout(() => {
      loadingScreen.remove();
    }, 400);
  }
};

const renderApp = () => {
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <App />
    </StrictMode>
  );

  if ("requestIdleCallback" in window) {
    requestIdleCallback(hideLoadingScreen);
  } else {
    setTimeout(hideLoadingScreen, 100);
  }
};

// Never leave the loading screen spinning if init fails on production hosts.
setTimeout(hideLoadingScreen, 8000);

initPromise.then(renderApp).catch((error) => {
  console.error("i18n initialization failed:", error);
  renderApp();
});
