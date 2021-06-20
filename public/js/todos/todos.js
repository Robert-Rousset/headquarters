import todoModal from "./todo-modal.js";
import generateTodoElement from "./generate-todo-element.js";
import items from "./items/items.js";

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

async function init() {
  document.querySelector("#add-todo-button").onclick = addTodo;
  document.querySelector("#back-button").onclick = back;
  todoModal.init();
  const url = document.location.toString();
  const pathArray = url.split("/");
  const lastPathElement = pathArray[pathArray.length - 1];
  if (!isNaN(lastPathElement)) {
    const response = await fetch(`/api/todos/${lastPathElement}`);
    const todo = await response.json();
    items.init(todo);
  } else {
    displayTodos();
  }
}

init();
