export const renderAddModal = () => {
  const app = document.querySelector("#app");

  const modal = document.createElement("div");
  modal.classList.add("popup");
  modal.innerHTML = `
            <div class="popup-box">
                <div class="content">
                    <div id="popup">Please Provide A Title or Description</div>
                    <header>
                        <h2>Add A New Note</h2>
                    </header>
                    <main>
                        <div class="title-row">
                            <h2>Title</h2>
                            <input type="text" placeholder="Enter your Note title Here">
                        </div>
                        <div class="description-row">
                            <h2>Description</h2>
                            <textarea id="description-text" placeholder="Enter your Note Description Here"></textarea>
                        </div>
                        <button>Add Note</button>
                    </main>
                </div>
            </div>
      `;

  app.appendChild(modal);

  const closeButton = modal.querySelector(".close");
  closeButton.addEventListener("click", () => {
    modal.remove();
  });
};
