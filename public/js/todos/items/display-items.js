import generateItem from "./generate-item.js";
import generateTodo from "../generate-todo.js";
import generateAddNewItemItem from "./generateAddNewItemItem.js";
import createItem from "./create-item.js";

export default function (items, todo) {
    const listEl = document.querySelector("#todos");
    listEl.innerHTML = "";
    const todoEl = document.createElement("li");
    todoEl.innerHTML = generateTodo(todo);
    listEl.append(todoEl);
    items.forEach(item => {
        const newItemEl = generateItem(item, todo.colour);
        listEl.append(newItemEl);
    });

    const addNewItemItem = generateAddNewItemItem(todo);
    listEl.append(addNewItemItem);
    document.querySelector(".create-item-button").addEventListener('click', createItem);
    setUpEdits();
}

function setUpEdits() {
    const edits = Array.from(document.querySelectorAll(".edit"));
    edits.forEach((edit) => {
        edit.addEventListener("click", toggleTodoModal);
    });
}

function onItemClick(event) {
    const item = event.currentTarget;
    const itemEdit = item.querySelector(".edit");
    const itemId = itemEdit.dataset.itemId;
    items(itemId);
}
