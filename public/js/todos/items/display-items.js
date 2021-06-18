import generateItem from "./generate-item.js";
import generateTodo from "../generate-todo.js";
import generateAddNewItemItem from "./generate-add-new-item-item.js";
import createItem from "./create-item.js";
import editItem from "./edit-item.js";
import updateItem from "./update-item.js";
import deleteItem from "./delete-item.js";
import itemIdSelection from "./item-id-selection.js";

export default function (items, todo) {
  const listEl = document.querySelector("#todos");
  listEl.innerHTML = "";
  const todoEl = createTodoTitle(todo);
  listEl.append(todoEl);
  items.forEach((item) => {
    const newItemEl = generateItem(item, todo.colour);
    listEl.append(newItemEl);
  });
  const addNewItemItem = createAddNewItemItem(todo);
  listEl.append(addNewItemItem);
  document
    .querySelector(".create-item-button")
    .addEventListener("click", createItem);
  initEditItemButtons();
  initDeleteItemButtons();
  itemIdSelection.setSelectedItemId(null);
}

function createTodoTitle(todo) {
  const todoEl = document.createElement("li");
  todoEl.innerHTML = generateTodo(todo);
  todoEl.querySelector(".edit-todo").style.display = "none";
  todoEl.querySelector(".delete").style.display = "none";
  return todoEl;
}

function createAddNewItemItem(todo) {
  const addNewItemItem = generateAddNewItemItem(todo);
  addNewItemItem
    .querySelector("input")
    .addEventListener("input", function (_event) {
      const createItemButton = this.closest(".item").querySelector(
        ".create-item-button"
      );
      if (this.value.length > 0) {
        createItemButton.setAttribute("class", "create-item-button");
      } else {
        createItemButton.setAttribute("class", "create-item-button is-hidden");
      }
    });
  return addNewItemItem;
}

function initEditItemButtons() {
  const editItemButtons = Array.from(
    document.querySelectorAll(".edit-item-button")
  );
  editItemButtons.forEach((editItemButton) => {
    editItemButton.addEventListener("click", editItem);
    const input = editItemButton.closest(".item").querySelector("input");
    input.addEventListener("input", function (_event) {
      const updateItemButton = this.closest(".item").querySelector(
        ".update-item-button"
      );
      if (input.value.length > 0) {
        updateItemButton.setAttribute("class", "update-item-button");
      } else {
        updateItemButton.setAttribute("class", "update-item-button is-hidden");
      }
    });
  });
  const updateItemButtons = Array.from(
    document.querySelectorAll(".update-item-button")
  );
  updateItemButtons.forEach((updateItemButton) => {
    updateItemButton.addEventListener("click", updateItem);
  });
}

function initDeleteItemButtons() {
  const deleteItemButtons = Array.from(document.querySelectorAll(".delete"));
  deleteItemButtons.forEach((deleteItemButton) => {
    deleteItemButton.addEventListener("click", deleteItem);
  });
}
