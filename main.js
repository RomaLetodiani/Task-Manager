import { renderHome } from "./views/home.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    renderHome();
  } catch (error) {
    console.error("Error rendering home view:", error);
  }
});
