import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { initI18n } from "./i18n";
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

initI18n().then(() => {
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
});
