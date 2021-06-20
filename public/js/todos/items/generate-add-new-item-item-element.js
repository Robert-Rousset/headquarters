import hideAllItemEdits from "./hide-all-item-edits.js";
import items from "./items.js";

export default function (todo) {
  const addNewItemItem = document.createElement("li");
  addNewItemItem.innerHTML = `
<div class="item button ${todo.colour} notification" id="add-new-item-item">
  <div class="confirm-add-item-button is-fade"><i class="far fa-save"></i></div>
  <div class="field">
    <p class="control">
        <input
        class="input item-input is-hidden"
        type="text"
        placeholder="Add new item"
        id="add-item-input"
        />
    </p>
  </div>
  <div id="plus-container">
    <i class="fas fa-plus-square" id="plus"></i>
  </div>
  <div id="add-clicker"></div>
</div>
    `;
  addNewItemItem.querySelector("input").oninput = hideShowCreateItemButton;
  addNewItemItem.querySelector(".confirm-add-item-button").onclick = function (
    event
  ) {
    items.confirmAdd(event);
  };
  addNewItemItem
    .querySelector("#add-clicker")
    .addEventListener("click", addItem);
  return addNewItemItem;
}

function hideShowCreateItemButton(_event) {
  const confirmAddItemButton = this.closest(".item").querySelector(
    ".confirm-add-item-button"
  );
  if (this.value.length > 0) {
    confirmAddItemButton.classList.remove("is-fade");
  } else {
    confirmAddItemButton.classList.add("is-fade");
  }
}

export function addItem(_event) {
  this.removeEventListener("click", addItem);
  console.log("HELLO");
  hideAllItemEdits();
  const input = document.querySelector("#add-item-input");
  input.classList.remove("is-hidden");
  input.value = "";
  input.focus();
  document
    .querySelector("#add-new-item-item input")
    .classList.remove("is-hidden");
}
