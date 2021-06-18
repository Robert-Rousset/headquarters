import hideAllItemEdits from "./hide-all-item-edits.js";
import items from "./items.js";

export default async function (url, method) {
  try {
    const item = Array.from(document.querySelectorAll(".item")).find(
      item => item.dataset.id === items.selectedItemId
    );
    const newContent =
      method === "POST"
        ? document.querySelector("#add-item-input").value.trim()
        : !item
        ? null
        : item.querySelector("input").value.trim();
    hideAllItemEdits();
    const response = await fetch(url, {
      method: method,
      body: JSON.stringify({
        content: newContent,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const allItems = await response.json();
      await items.displayItems(allItems);
    }
  } catch (err) {
    console.log(err);
  }
}
