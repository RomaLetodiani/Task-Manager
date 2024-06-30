import { renderAddModal } from "../components/AddModal/AddModal.js";

export const renderHeader = () => {
  const header = document.querySelector("header");
  header.innerHTML = `
  <div>
  <h1>Task Manager</h1>
  <button class="add-task">Add Task</button>
  </div>
    `;

  const addTaskButton = header.querySelector(".add-task");
  addTaskButton.addEventListener("click", renderAddModal);
};
