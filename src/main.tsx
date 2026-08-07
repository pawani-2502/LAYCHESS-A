import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

const STORAGE_KEY = "laychess-theme";
const stored = localStorage.getItem(STORAGE_KEY);
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const isDark = stored === "dark" || (!stored && prefersDark);
document.documentElement.classList.toggle("dark", isDark);

createRoot(document.getElementById("root")!).render(<App />);
