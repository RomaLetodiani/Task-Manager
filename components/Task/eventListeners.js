import { saveTasksToLocalStorage } from "../../services/localStorage.js";
import { isValidTask } from "../../utils/validators.js";

export const checkBoxChange = (checkbox, textInput, task, tasks) => {
  if (checkbox.checked) {
    textInput.classList.add("done");
  } else {
    textInput.classList.remove("done");
  }
  task.completed = checkbox.checked;
  saveTasksToLocalStorage(tasks);
};

export const editButtonClick = (textInput, task, tasks, editButton, checkbox) => {
  if (task.completed) {
    // If the task is completed, we don't want to allow editing
    // I will just alert it this time but you can add a modal or a toast message here
    alert("You can't edit a completed task");
    return;
  }

  if (editButton.textContent === "Edit") {
    checkbox.disabled = true;
    textInput.removeAttribute("readonly");
    textInput.focus();
    editButton.textContent = "Update";
  } else {
    checkbox.disabled = false;
    const isTaskValid = isValidTask({ ...task, title: textInput.value });
    if (!isTaskValid) {
      alert("Task title is required");
      return;
    }
    textInput.setAttribute("readonly", "readonly");
    task.title = textInput.value;
    saveTasksToLocalStorage(tasks);
    editButton.textContent = "Edit";
  }
};

export const deleteButtonClick = (task, tasks, taskElement) => {
  const index = tasks.findIndex((t) => t.id === task.id);
  tasks.splice(index, 1);
  saveTasksToLocalStorage(tasks);
  taskElement.remove();
};
