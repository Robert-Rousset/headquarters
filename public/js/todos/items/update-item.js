import itemIdSelection from "./item-id-selection.js";
import todoIdSelection from "../todo-id-selection.js";
import displayItems from "./display-items.js";

export default async function updateItem(_event) {
  try {
    const res = await fetch(
      `/api/todos/${todoIdSelection.getSelectedTodoId()}`
    );
    const todo = await res.json();
    const newContent = this.parentElement
      .querySelector(".item-input")
      .value.trim();
    const itemId = itemIdSelection.getSelectedItemId();
    const response = await fetch(`/api/items/update-item/${itemId}`, {
      method: "PUT",
      body: JSON.stringify({
        content: newContent,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    itemIdSelection.setSelectedItemId("");
    if (response.ok) {
      const items = await response.json();
      displayItems(items, todo);
    }
  } catch (err) {
    console.log(err);
  }
}
