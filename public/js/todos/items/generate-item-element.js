import items from "./items.js";
import hideAllItemEdits from "./hide-all-item-edits.js";
import sendItemRequest from "./send-item-request.js";

export default function generateItem(item, colourString) {
  const newItem = document.createElement("li");
  newItem.innerHTML = `
<div class="item button ${colourString} notification"
  data-id="${item.id}"
  data-content="${item.content}">
  <div class="confirm-edit-item-button is-hidden">
    <i class="far fa-save"></i>
  </div>
  <div class="edit-item-button">
    <i class="fas fa-pen-square"></i>
  </div>
  <div class="field">
    <p class="control">
      <input
        class="input item-input is-hidden"
        type="text"
      />
      <p class="item-content">${item.content}</p>
    </p>
  </div>
  <button class="delete" aria-label="close"></button>
</div>
`;
  newItem.querySelector(".edit-item-button").onclick = editItem;
  newItem.querySelector("input").oninput = hideShowConfirmEditButton;
  newItem.querySelector(".confirm-edit-item-button").onclick = function (
    event
  ) {
    items.confirmEdit(event);
  };
  newItem.querySelector(".delete").onclick = deleteItem;
  return newItem;
}

function editItem(event) {
  hideAllItemEdits();
  const item = this.closest(".item");
  item.querySelector(".edit-item-button").classList.add("is-hidden");
  item.querySelector(".delete").classList.add("is-hidden");
  item.querySelector(".item-content").classList.add("is-hidden");
  item.querySelector(".confirm-edit-item-button").classList.remove("is-hidden");
  const input = item.querySelector("input");
  input.classList.remove("is-hidden");
  input.value = item.dataset.content;
  items.selectedItemId = item.dataset.id;
}

function hideShowConfirmEditButton(event) {
  const updateItemButton = this.closest(".item").querySelector(
    ".confirm-edit-item-button"
  );
  if (this.value.length > 0) {
    updateItemButton.classList.remove("is-fade");
  } else {
    updateItemButton.classList.add("is-fade");
  }
}

async function deleteItem(event) {
  event.stopPropagation();
  const itemId = this.closest(".item").dataset.id;
  sendItemRequest(`/api/items/delete-item/${itemId}`, "DELETE");
}
