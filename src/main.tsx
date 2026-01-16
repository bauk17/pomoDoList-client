import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { PomodoroThemeProvider } from "./context/PomodoroThemeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PomodoroThemeProvider>
      <App />
    </PomodoroThemeProvider>
  </StrictMode>
);
