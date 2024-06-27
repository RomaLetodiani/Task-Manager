export const saveTasksToLocalStorage = (tasks) => {
  try {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } catch (error) {
    console.error("Error saving tasks to local storage:", error.message);
  }
};

export const getTasksFromLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  } catch (error) {
    console.error("Error retrieving tasks from local storage:", error.message);
    return [];
  }
};
