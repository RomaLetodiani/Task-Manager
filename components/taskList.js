import { createTaskElement } from "./Task/task.js";

// I would build pagination or infinite scroll here but for the sake of simplicity I will just render all tasks
export const renderTaskList = (tasks) => {
  const taskList = document.querySelector(".task-list");
  // Dom Batching - https://developers.google.com/web/updates/2019/02/rendering-on-the-web
  // Create a document fragment to append all tasks at once
  // This is more efficient than appending each task individually
  const fragment = document.createDocumentFragment();
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const listItem = createTaskElement(task, tasks);
    fragment.appendChild(listItem);
  });
  taskList.appendChild(fragment);
};
