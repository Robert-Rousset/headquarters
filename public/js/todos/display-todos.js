import generateTodo from "./generate-todo.js";
import items from "./items/items.js";
import editTodo from "./edit-todo.js";
import todoIdSelection from "./todo-id-selection.js";

export default function (todos) {
  const todosEl = document.querySelector("#todos");
  todosEl.innerHTML = "";
  todos.forEach((todo) => {
    const newTodo = document.createElement("li");
    newTodo.innerHTML = generateTodo(todo);
    newTodo.addEventListener("click", onTodoClick);
    todosEl.append(newTodo);
  });
  initEditTodoButtons();
}

function initEditTodoButtons() {
  const edits = Array.from(document.querySelectorAll(".edit-todo"));
  edits.forEach((edit) => {
    edit.addEventListener("click", editTodo);
  });
}

function onTodoClick(event) {
  const todo = event.currentTarget;
  const todoEdit = todo.querySelector(".edit-todo");
  const todoId = todoEdit.dataset.todoId;
  todoIdSelection.setSelectedTodoId(todoId);
  items(todoId);
}
