import generateTodo from "./generate-todo.js";
import items from "./items/items.js";
import editTodo from "./edit-todo.js";
import todoIdSelection from "./todo-id-selection.js";
import sendTodo from "./send-todo.js";
import showCreateTodoButton from "./show-create-todo-button.js";

export default function (todos) {
  showCreateTodoButton();
  const todosEl = document.querySelector("#todos");
  todosEl.innerHTML = "";
  todos.forEach((todo) => {
    const newTodo = document.createElement("li");
    newTodo.innerHTML = generateTodo(todo);
    newTodo.addEventListener("click", onTodoClick);
    todosEl.append(newTodo);
  });
  initEditTodoButtons();
  initDeleteTodoButtons();
}

function initEditTodoButtons() {
  const edits = Array.from(document.querySelectorAll(".edit-todo"));
  edits.forEach((edit) => {
    edit.addEventListener("click", editTodo);
  });
}

function initDeleteTodoButtons() {
  const deleteTodoButtons = Array.from(document.querySelectorAll(".delete"));
  deleteTodoButtons.forEach((deleteTodoButton) => {
    deleteTodoButton.addEventListener("click", deleteTodo);
  });
}

async function deleteTodo(event) {
  event.stopPropagation();
  const todo = this.closest(".todo");
  const editTodoButton = todo.querySelector(".edit-todo");
  const todoId = editTodoButton.dataset.todoId;
  const response = await fetch(`/api/todos/${todoId}/items`);
  const items = await response.json();
  let shouldDelete = true;
  if (items.length > 0) {
    shouldDelete = window.confirm(
      "This list contains items. Are you sure you wish to delete it?"
    );
  }
  if (shouldDelete) {
    sendTodo(`/api/todos/delete-todo/${todoId}`, "DELETE", null);
  }
}

function onTodoClick(event) {
  const todo = event.currentTarget;
  const todoEdit = todo.querySelector(".edit-todo");
  const todoId = todoEdit.dataset.todoId;
  todoIdSelection.setSelectedTodoId(todoId);
  items(todoId);
}
