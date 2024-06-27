import { generateUniqueId } from "../../utils/helpers.js";
import { checkBoxChange, deleteButtonClick, editButtonClick } from "./eventListeners.js";

export const createTaskElement = (task, tasks) => {
  const taskElement = document.createElement("div");
  taskElement.className = "task";
  const checkboxId = generateUniqueId(task.id + "checkbox");
  const textareaId = generateUniqueId(task.id + "textarea");
  const checked = task.completed ? "checked" : "";

  taskElement.innerHTML = `
      <div class="inputs">
        <input id=${checkboxId} type="checkbox" ${checked}>
        <textarea id=${textareaId} readonly>${task.title}</textarea>
      </div>
      <div class="actions">
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      </div>
    `;

  // Get the elements from the task element
  const checkbox = taskElement.querySelector(`input[type="checkbox"]`);
  const textarea = taskElement.querySelector("textarea");
  const editButton = taskElement.querySelector(".edit");
  const deleteButton = taskElement.querySelector(".delete");

  if (task.completed) {
    textarea.classList.add("done");
  }

  // Event listeners for task actions
  checkbox.addEventListener("change", checkBoxChange.bind(null, checkbox, textarea, task, tasks));

  editButton.addEventListener(
    "click",
    editButtonClick.bind(null, textarea, task, tasks, editButton, checkbox)
  );

  deleteButton.addEventListener("click", deleteButtonClick.bind(null, task, tasks, taskElement));

  return taskElement;
};
