import generateItemElement from "./generate-item-element.js";
import generateTodoElement from "../generate-todo-element.js";
import generateAddNewItemItemElement from "./generate-add-new-item-item-element.js";
import sendItemRequest from "./send-item-request.js";

export default {
  init(todo) {
    this.todo = todo;
    document.querySelector("#back-button").classList.remove("is-hidden");
    document.querySelector("#add-todo-button").classList.add("is-hidden");
    this.displayItems();
  },

  async displayItems(items) {
    if (!items) {
      items = await (await fetch(`/api/todos/${this.todo.id}/items`)).json();
    }
    const mainList = document.querySelector("#main-list");
    mainList.innerHTML = "";
    const todoTitleElement = generateTodoElement(this.todo);
    todoTitleElement.querySelector(".edit-todo-button").remove();
    todoTitleElement.querySelector(".delete").remove();
    mainList.append(todoTitleElement);
    items.forEach(item => {
      mainList.append(generateItemElement(item, this.todo.colour));
    });
    const addNewItemItem = generateAddNewItemItemElement(this.todo);
    mainList.append(addNewItemItem);
  },

  confirmAdd(event) {
    if (Array.from(event.currentTarget.classList).includes("is-fade")) {
      return;
    }
    sendItemRequest(`/api/todos/${this.todo.id}`, "POST");
  },

  confirmEdit(event) {
    if (Array.from(event.currentTarget.classList).includes("is-fade")) {
      return;
    }
    sendItemRequest(`/api/items/update-item/${this.selectedItemId}`, "PUT");
  },
};
