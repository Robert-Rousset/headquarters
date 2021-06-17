import itemIdSelection from "./item-id-selection.js";

export default function (_event) {
  if (
    itemIdSelection.getSelectedItemId() !== "" &&
    itemIdSelection.getSelectedItemId() !== this.dataset.itemId
  ) {
    cleanUpPreviouslyEditedItem();
  }
  itemIdSelection.setSelectedItemId(this.dataset.itemId);
  this.classList.toggle("is-hidden");
  this.closest(".item").querySelector(".delete").classList.toggle("is-hidden");
  const itemContent = this.closest(".item").querySelector(".item-content");
  itemContent.classList.toggle("is-hidden");
  const input = this.closest(".item").querySelector("input");
  input.classList.toggle("is-hidden");
  input.value = itemContent.textContent;
  this.closest(".item")
    .querySelector(".update-item-button")
    .classList.toggle("is-hidden");
}

function cleanUpPreviouslyEditedItem() {
  const selectedItemId = itemIdSelection.getSelectedItemId();
  const editItemButtons = Array.from(
    document.querySelectorAll(".edit-item-button")
  );
  const previousEditButton = editItemButtons.find(
    (button) => button.dataset.itemId === selectedItemId
  );
  previousEditButton.classList.toggle("is-hidden");
  previousEditButton
    .closest(".item")
    .querySelector(".delete")
    .classList.toggle("is-hidden");
  const itemContent = previousEditButton
    .closest(".item")
    .querySelector(".item-content");
  itemContent.classList.toggle("is-hidden");
  const input = previousEditButton.closest(".item").querySelector("input");
  input.classList.toggle("is-hidden");
  previousEditButton
    .closest(".item")
    .querySelector(".update-item-button")
    .classList.toggle("is-hidden");
}
