import { addButtonClick } from "./eventListeners.js";

export const renderAddModal = (tasks) => {
  const app = document.querySelector("#app");
  const modal = document.createElement("div");
  modal.classList.add("popup");
  modal.innerHTML = `
            <div class="popup-box">
                <div class="content">
                    <h2>Add A New Task</h2>
                    <div>
                        <div class="title-row">
                            <label for="addModalTitleInput">Title</label>
                            <textarea id="addModalTitleInput" placeholder="Enter your Task Here"></textarea>
                        </div>
                        <div class="actions">
                            <button class="cancel">Cancel</button>
                            <button class="add-task">Add Task</button>
                        </div>
                    </div>
                </div>
            </div>
      `;

  app.appendChild(modal);
  const titleInput = modal.querySelector("#addModalTitleInput");
  titleInput.focus();
  // Add event listener for cancel button
  const cancelButton = modal.querySelector(".cancel");
  cancelButton.addEventListener("click", () => {
    modal.remove();
  });

  // Add event listener for add task button
  const addTaskButton = modal.querySelector(".add-task");
  addTaskButton.addEventListener("click", addButtonClick.bind(null, tasks, modal));
};
