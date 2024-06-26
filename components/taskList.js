import { createTaskElement } from "./task.js";

export const renderTaskList = (tasks) => {
  const taskList = document.getElementById("task-list");
  const fragment = document.createDocumentFragment();
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const listItem = createTaskElement(task);
    fragment.appendChild(listItem);
  });
  taskList.appendChild(fragment);
};
