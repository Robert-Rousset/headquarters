import items from "./items/items.js";
import todoModal from "./todo-modal.js";
import sendTodoRequest from "./send-todo-request.js";

export default function (todo) {
  const newTodo = document.createElement("li");
  newTodo.innerHTML = `
  <div
    class="todo button ${todo.colour} notification"
    data-id="${todo.id}"
    data-title="${todo.title}"
    data-colour="${todo.colour}"
  >
    <div class="edit-todo-button">
      <i class="fas fa-pen-square"></i>
    </div>
    <p>${todo.title}</p>
    <button class="delete" aria-label="close"></button>
  </div>
`;
  newTodo.onclick = onTodoClick;
  newTodo.querySelector(".edit-todo-button").onclick = editTodo;
  newTodo.querySelector(".delete").onclick = deleteTodo;
  return newTodo;
}

function onTodoClick(_event) {
  const todoEl = this.querySelector(".todo");
  const todo = {
    id: todoEl.dataset.id,
    title: todoEl.dataset.title,
    colour: todoEl.dataset.colour,
  };
  items.init(todo);
}

function editTodo(event) {
  event.stopPropagation();
  const todo = this.closest(".todo");
  todoModal.selectedTodoId = todo.dataset.id;
  document.querySelector("#todo-title").value = todo.dataset.title;
  const colourElementToSelect = Array.from(
    document.querySelectorAll(".colour")
  ).find(colourElement =>
    Array.from(colourElement.classList).includes(todo.dataset.colour)
  );
  todoModal.selectColour(colourElementToSelect);
  todoModal.show("edit");
}

async function deleteTodo(event) {
  event.stopPropagation();
  const todoId = this.closest(".todo").dataset.id;
  const response = await fetch(`/api/todos/${todoId}/items`);
  const items = await response.json();
  const shouldDelete =
    items.length > 0
      ? confirm("This list contains items. Are you sure you wish to delete it?")
      : true;
  if (shouldDelete) {
    sendTodoRequest(`/api/todos/delete-todo/${todoId}`, "DELETE", null);
  }
}
