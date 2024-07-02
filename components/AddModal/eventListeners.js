import { saveTasksToLocalStorage } from "../../services/localStorage.js";
import { generateUniqueId } from "../../utils/helpers.js";
import { renderTaskList } from "../taskList.js";

export const addButtonClick = (tasks, modal) => {
  const titleInput = modal.querySelector("#addModalTitleInput");
  const title = titleInput.value.trim();

  if (title === "") {
    alert("Task title cannot be empty");
    return;
  }

  // Generate a unique ID for the new task (replace with your logic if needed)
  const newTaskId = generateUniqueId("task");

  // Create the new task object
  const newTask = {
    id: newTaskId,
    title: title,
    completed: false,
  };

  // Add the new task to the tasks array
  const updatedTasks = [newTask, ...tasks];

  // Save updated tasks to local storage
  saveTasksToLocalStorage(updatedTasks);

  // Render the updated task list
  renderTaskList(updatedTasks);

  // Close the modal
  modal.remove();
};
