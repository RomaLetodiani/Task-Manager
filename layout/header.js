import { renderAddModal } from "../components/AddModal/AddModal.js";

export const renderHeader = (tasks) => {
  const header = document.querySelector("header");
  if (!header) {
    console.error("Header element not found");
    return;
  }

  header.innerHTML = `
  <div>
  <h1>Task Manager</h1>
  <button class="add-task">Add Task</button>
  </div>
    `;

  const addTaskButton = header.querySelector(".add-task");
  if (!addTaskButton) {
    console.error("Add Task button not found");
    return;
  }
  addTaskButton.addEventListener("click", () => renderAddModal(tasks));
};
