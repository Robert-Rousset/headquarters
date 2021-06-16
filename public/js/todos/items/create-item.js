import todoIdSelection from "../todo-id-selection.js";
import displayItems from "../items/display-items.js";

export default async function (event) {
    try {
        const newContent = event.currentTarget.parentElement.querySelector(".item-input").value.trim();
        const response = await fetch(`/api/todos/${todoIdSelection.getSelectedTodoId()}/items`, {
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
            displayItems(items);
        }
    } catch (err) {
        console.log(err);
    }
}


