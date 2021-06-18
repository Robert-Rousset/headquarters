import displayItems from "./display-items.js";
import getAndShowTodos from "../todos.js";
import itemIdSelection from "./item-id-selection.js";

export default async function (todoId) {
  init();
  const response = await fetch(`/api/todos/${todoId}`);
  const todo = await response.json();
  const items = await (await fetch(`/api/todos/${todoId}/items`)).json();
  displayItems(items, todo);
}

function init() {
  const createTodoButton = document.querySelector("#new-list");
  createTodoButton.classList.toggle("is-hidden");
  const backButton = document.querySelector("#back-button");
  backButton.classList.toggle("is-hidden");
  backButton.addEventListener("click", backToTodos);
}

function backToTodos(_event) {
  const createTodoButton = document.querySelector("#new-list");
  createTodoButton.classList.toggle("is-hidden");
  const backButton = document.querySelector("#back-button");
  backButton.classList.toggle("is-hidden");
  itemIdSelection.setSelectedItemId(null);
  getAndShowTodos();
}
