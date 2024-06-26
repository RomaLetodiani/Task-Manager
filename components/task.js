import { generateUniqueId } from "../utils/helpers.js";

export const createTaskElement = (task) => {
  const taskElement = document.createElement("div");
  taskElement.className = "task";
  taskElement.innerHTML = `
      <div>
        <input id=${generateUniqueId(task.id)} type="checkbox" ${task.completed ? "checked" : ""}>
        <span>${task.title}</span>
      </div>
      <div class="actions">
        <button class="edit-task-btn">Edit</button>
        <button class="delete-task-btn">Delete</button>
      </div>
    `;
  return taskElement;
};
