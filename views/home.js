import { renderTaskList } from "../components/taskList.js";
import { renderFooter } from "../layout/footer.js";
import { renderHeader } from "../layout/header.js";
import { fetchTasks } from "../services/api.js";
import { getTasksFromLocalStorage, saveTasksToLocalStorage } from "../services/localStorage.js";

export const renderHome = async () => {
  // Render the header and footer
  renderHeader();
  renderFooter();

  // Get tasks from local storage or fetch them from the API
  let tasks = getTasksFromLocalStorage();
  if (tasks.length === 0) {
    tasks = await fetchTasks();
    saveTasksToLocalStorage(tasks);
  }

  // Render the task list
  renderTaskList(tasks);
};
