# Task Manager

## Description

A simple task manager web application to manage daily tasks. Built with vanilla JavaScript, HTML, and CSS.

## Features

- Display a list of tasks.
- Add a new task to the list.
- Edit an existing task.
- Delete a task from the list.
- Mark a task as completed or not completed.
- Save tasks to the browser's local storage.
- Fetch initial tasks from a mock API.

## How to Run

1. Clone the repository.
2. Open `index.html` in your browser.

## Folder Structure

- `assets/`: Contains styles and static assets.
- `components/`: Contains UI components.
- `services/`: Contains services for API and local storage.
- `utils/`: Contains utility functions and constants.
- `views/`: Contains view logic.

```
task-manager/
├── assets/
│   ├── styles/
│   │   └── main.css
├── components/
│   ├── AddModal/
│   │   └── AddModal.js
│   ├── Task/
│   │   ├── eventListeners.js
│   │   └── task.js
│   └── taskList.js
├── layout/
│   ├── header.js
│   └── footer.js
├── services/
│   ├── api.js
│   └── localStorage.js
├── utils/
│   ├── constants.js
│   ├── helpers.js
│   └── validators.js
├── views/
│   └── home.js
├── index.html
├── main.js
└── README.md
```
