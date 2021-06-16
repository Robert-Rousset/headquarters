import displayTodos from "./display-todos.js";
import createTodo from "./create-todo.js";
import updateTodo from "./update-todo.js";
import colourSelection from "./colour-selection.js";
import toggleTodoModal from "./modal-magic.js";
  
function setUpColors() {
  const colours = Array.from(document.querySelectorAll(".colour"));
  colours.forEach((colour) => {
    colour.addEventListener("click", function selectColour(event) {
      event.preventDefault();
      colourSelection.selectColourElement(this);
    });
  });
}

function setUpModal() {
  document
    .querySelector("#todo-background")
    .addEventListener("click", toggleTodoModal);
  document
    .querySelector("#todo-delete")
    .addEventListener("click", toggleTodoModal);
  document
    .querySelector("#new-list")
    .addEventListener("click", toggleTodoModal);
  document
    .querySelector("#create-todo-confirm")
    .addEventListener("click", createTodo);

  document
    .querySelector("#update-todo-confirm")
    .addEventListener("click", updateTodo);
}

async function init() {
  setUpColors();
  setUpModal();
  const response = await fetch("/api/todos/");
  if (response.ok) {
    const todos = await response.json();
    displayTodos(todos);
  }
}

init();
