import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./i18n";
import "./styles/index.css";

// Hide loading screen when app is ready
const hideLoadingScreen = () => {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    loadingScreen.classList.add('hidden');
    // Remove from DOM after animation
    setTimeout(() => {
      loadingScreen.remove();
    }, 400);
  }
};

// Render app and hide loading screen
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Hide loading screen after initial render
// Using requestIdleCallback for better performance, with setTimeout fallback
if ('requestIdleCallback' in window) {
  requestIdleCallback(hideLoadingScreen);
} else {
  setTimeout(hideLoadingScreen, 100);
}
