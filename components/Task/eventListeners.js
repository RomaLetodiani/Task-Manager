import { saveTasksToLocalStorage } from "../../services/localStorage.js";
import { isValidTask } from "../../utils/validators.js";

export const checkBoxChange = (checkbox, textInput, task, tasks) => {
  task.completed = checkbox.checked;
  textInput.classList.toggle("done", task.completed);
  saveTasksToLocalStorage(tasks);
};

export const editButtonClick = (textInput, task, tasks, editButton, checkbox) => {
  if (task.completed) {
    // If the task is completed, we don't want to allow editing
    // I will just alert it this time but you can add a modal or a toast message here
    alert("You can't edit a completed task");
    return;
  }

  const isEditing = editButton.textContent === "Edit";

  checkbox.disabled = isEditing;
  textInput.readOnly = !isEditing;

  if (isEditing) {
    checkbox.disabled = true;
    textInput.focus();
    editButton.textContent = "Update";
  } else {
    const newTitle = textInput.value.trim();
    const isTaskValid = isValidTask({ ...task, title: newTitle });

    if (!isTaskValid) {
      alert("Task title is required");
      return;
    }

    task.title = newTitle;
    saveTasksToLocalStorage(tasks);
    editButton.textContent = "Edit";
  }
};

export const deleteButtonClick = (task, tasks, taskElement) => {
  const index = tasks.findIndex((t) => t.id === task.id);
  if (index !== -1) {
    tasks.splice(index, 1);
    saveTasksToLocalStorage(tasks);
    taskElement.remove();
  } else {
    console.error("Task not found in the list");
  }
};
