export const renderFooter = () => {
  const footer = document.querySelector("footer");

  if (!footer) {
    console.error("Footer element not found");
    return;
  }
  footer.innerHTML = `
      <p>&copy; 2024 Task Manager</p>
    `;
};
