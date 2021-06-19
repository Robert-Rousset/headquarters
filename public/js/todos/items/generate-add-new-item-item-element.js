import items from "./items.js";

export default function (todo) {
  const addNewItemItem = document.createElement("li");
  addNewItemItem.innerHTML = `
<div class="item button ${todo.colour} notification">
    <div class="confirm-add-item-button is-hidden"><i class="far fa-save"></i></div>
    <div class="field">
      <p class="control">
          <input
          class="input item-input"
          type="text"
          placeholder="Add new item"
          id="add-item-input"
          />
      </p>
    </div>
</div>
    `;
  addNewItemItem.querySelector("input").oninput = hideShowCreateItemButton;
  addNewItemItem.querySelector(".confirm-add-item-button").onclick = function (
    event
  ) {
    items.confirmAdd();
  };
  return addNewItemItem;
}

function hideShowCreateItemButton(_event) {
  const confirmAddItemButton = this.closest(".item").querySelector(
    ".confirm-add-item-button"
  );
  if (this.value.length > 0) {
    confirmAddItemButton.classList.remove("is-hidden");
  } else {
    confirmAddItemButton.classList.add("is-hidden");
  }
}
