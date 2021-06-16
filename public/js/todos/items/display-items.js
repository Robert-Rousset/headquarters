import generateItems from "./generate-todo.js";
import items from "./items/items.js";
import toggleTodoModal from "./modal-magic.js";

export default function (items) {
    const itemsEl = document.querySelector("#items");
    itemsEl.innerHTML = "";
    todos.forEach((todo) => {
        const newItems = document.createElement("li");
        newItems.innerHTML = generateItems(todo);
        newItems.addEventListener("click", onItemClick);
        itemsEl.append(newItems);
    });
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
