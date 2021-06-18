import todoIdSelection from "../todo-id-selection.js";

export default async function (_event) {
    const item = this.closest(".item");
    const editItemButton = item.querySelector(".edit-item-button");
    const itemId = editItemButton.dataset.itemId;

    try {
        const res = await fetch(
            `/api/todos/${todoIdSelection.getSelectedTodoId()}`
        );
        const todo = await res.json();
        const response = await fetch(`/api/items/delete-item/${itemId}`, {
            method: "DELETE"
        });
        if (response.ok) {
            const items = await response.json();
            displayItems(items, todo);
        }
        res.status(200).json(items);
    } catch (err) {
        console.log(err);
    }
}
