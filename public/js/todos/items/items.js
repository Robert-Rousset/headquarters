import generateTodo from "../generate-todo.js";

export default async function (todoId) {
  const response = await fetch(`/api/todos/${todoId}`);
  const todo = await response.json();
  const listEl = document.querySelector("#todos");
  listEl.innerHTML = "";
  const todoEl = document.createElement("li");
  todoEl.innerHTML = generateTodo(todo);
  listEl.append(todoEl);
  const addNewItemItem = generateAddNewItemItem(todo);
  listEl.append(addNewItemItem);
}

function generateAddNewItemItem(todo) {
  const addNewItemItem = document.createElement("li");
  addNewItemItem.innerHTML = `
    <div class="item button ${todo.colour} notification">
          <div
            class="edit"
            ><i class="far fa-save"></i></div>
            <div class="field">
          <p class="control">
            <input
              class="input"
              id="item-title"
              type="text"
              placeholder="Add new item"
            />
          </p>
        </div>
          <button class="delete" aria-label="close"></button>
        </div>
    `;
  return addNewItemItem;
}
