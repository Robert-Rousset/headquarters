import todoModal from "./todo-modal.js";
import generateTodoElement from "./generate-todo-element.js";

export async function displayTodos(todos) {
  if (!todos) {
    const response = await fetch("/api/todos/");
    todos = await response.json();
  }
  document.querySelector("#add-todo-button").classList.remove("is-hidden");
  document.querySelector("#back-button").classList.add("is-hidden");
  const mainList = document.querySelector("#main-list");
  mainList.innerHTML = "";
  todos.forEach(todo => {
    mainList.append(generateTodoElement(todo));
  });
}

async function back(_event) {
  document.querySelector("#add-todo-button").classList.remove("is-hidden");
  document.querySelector("#back-button").classList.add("is-hidden");
  globalThis.selectedItemId = null;
  displayTodos();
}

function addTodo(_event) {
  const firstColourElement = document.querySelector(".colours").children[0];
  todoModal.selectColour(firstColourElement);
  document.querySelector("#todo-title").value = "";
  todoModal.show("add");
}

function init() {
  document.querySelector("#add-todo-button").onclick = addTodo;
  document.querySelector("#back-button").onclick = back;
  todoModal.init();
  displayTodos();
}

init();
