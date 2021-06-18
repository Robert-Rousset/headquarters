import displayTodos from "./display-todos.js";
import sendTodo from "./send-todo.js";
import colourSelection from "./colour-selection.js";
import todoIdSelection from "./todo-id-selection.js";
import createTodo from "./create-todo.js";
import toggleTodoModal from "./toggle-todo-modal.js";

function initColourSelectors() {
  const colourSelectors = Array.from(document.querySelectorAll(".colour"));
  colourSelectors.forEach((colourSelector) => {
    colourSelector.addEventListener("click", function (_event) {
      colourSelection.setSelectedColourSelector(this);
    });
  });
}

function initTodoModal() {
  document
    .querySelector("#todo-background")
    .addEventListener("click", toggleTodoModal);
  document
    .querySelector("#todo-delete")
    .addEventListener("click", toggleTodoModal);
  document
    .querySelector("#create-todo-confirm")
    .addEventListener("click", confirmCreateTodo);
  document
    .querySelector("#update-todo-confirm")
    .addEventListener("click", confirmUpdateTodo);
}

function initCreateNewTodoButton() {
  document.querySelector("#new-list").addEventListener("click", createTodo);
}

function confirmCreateTodo(_event) {
  const selectedColour = colourSelection.getSelectedColour();
  toggleTodoModal();
  sendTodo("/api/users/create-todo", "POST", selectedColour);
}

function confirmUpdateTodo(_event) {
  const selectedTodoId = todoIdSelection.getSelectedTodoId();
  const selectedColour = colourSelection.getSelectedColour();
  toggleTodoModal();
  sendTodo(`/api/users/update-todo/${selectedTodoId}`, "PUT", selectedColour);
}

export default async function getAndShowTodos() {
  const response = await fetch("/api/todos/");
  if (response.ok) {
    const todos = await response.json();
    displayTodos(todos);
  }
}

async function init() {
  initCreateNewTodoButton();
  initColourSelectors();
  initTodoModal();
  await getAndShowTodos();
}

init();
