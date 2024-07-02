import { renderTaskList } from "../components/taskList.js";
import { renderFooter } from "../layout/footer.js";
import { renderHeader } from "../layout/header.js";
import { fetchTasks } from "../services/api.js";
import { getTasksFromLocalStorage, saveTasksToLocalStorage } from "../services/localStorage.js";

export const renderHome = async () => {
  try {
    // Get tasks from local storage or fetch them from the API
    let tasks = getTasksFromLocalStorage();
    if (tasks.length === 0) {
      // Remove unnecessary userId field from tasks
      tasks = await fetchTasks().then((tasks) =>
        tasks.map((t) => {
          const { userId, ...rest } = t;
          return rest;
        })
      );
      saveTasksToLocalStorage(tasks);
    }
    // Render the header and footer
    renderHeader(tasks);
    renderFooter();

    // Render the task list
    renderTaskList(tasks);
  } catch (error) {
    console.error("Error rendering home:", error);
  }
};
