import generateTodo from "../generate-todo.js";
import createItem from "./create-item.js";

export default async function (todoId) {
  const response = await fetch(`/api/todos/${todoId}`);
  const todo = await response.json();
  const listEl = document.querySelector("#todos");
  listEl.innerHTML = "";
  const todoEl = document.createElement("li");
  todoEl.innerHTML = generateTodo(todo);
  listEl.append(todoEl);
  //fetch items
  //generate each item and append to listEl
  const addNewItemItem = generateAddNewItemItem(todo);
  listEl.append(addNewItemItem);
  document.querySelector(".create-item-button").addEventListener('click', createItem);
}

function generateAddNewItemItem(todo) {
  const addNewItemItem = document.createElement("li");
  addNewItemItem.innerHTML = `
    <div class="item button ${todo.colour} notification">
          <div
            class="create-item-button" 
            ><i class="far fa-save"></i></div>
            <div class="field">
          <p class="control">
            <input
              class="input item-input"
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



