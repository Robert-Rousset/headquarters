import todoIdSelection from "../todo-id-selection.js";
import displayItems from "../items/display-items.js";

export default async function (event) {
    try {
        const res = await fetch(`/api/todos/${todoIdSelection.getSelectedTodoId()}`);
        const todo = await res.json();
        const newContent = this.parentElement.querySelector(".item-input").value.trim();
        const response = await fetch(`/api/todos/${todo.id}/items`, {
            method: "POST",
            body: JSON.stringify({
                content: newContent,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            const items = await response.json();
            displayItems(items, todo);
        }
    } catch (err) {
        console.log(err);
    }
}


