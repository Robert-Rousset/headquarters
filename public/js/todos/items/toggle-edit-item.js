export default function toggleEditItem(itemId) {
  if (!itemId) {
    return;
  }
  const editItemButtons = Array.from(
    document.querySelectorAll(".edit-item-button")
  );
  const editItemButton = editItemButtons.find(
    (button) => button.dataset.itemId === itemId
  );
  editItemButton.classList.toggle("is-hidden");
  const itemEl = editItemButton.closest(".item");
  const deleteButton = itemEl.querySelector(".delete");
  deleteButton.classList.toggle("is-hidden");
  const itemContent = itemEl.querySelector(".item-content");
  itemContent.classList.toggle("is-hidden");
  const input = itemEl.querySelector("input");
  input.classList.toggle("is-hidden");
  input.value = itemContent.textContent;
  const updateItemButton = itemEl.querySelector(".update-item-button");
  updateItemButton.classList.toggle("is-hidden");
}
