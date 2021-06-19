export default function hideAllItemEdits() {
  Array.from(document.querySelectorAll(".edit-item-button")).forEach(
    editItemButton => editItemButton.classList.remove("is-hidden")
  );
  Array.from(document.querySelectorAll(".delete")).forEach(deleteButton =>
    deleteButton.classList.remove("is-hidden")
  );
  Array.from(document.querySelectorAll(".item-content")).forEach(itemContent =>
    itemContent.classList.remove("is-hidden")
  );
  Array.from(document.querySelectorAll(".confirm-edit-item-button")).forEach(
    confirmEditItemButton => confirmEditItemButton.classList.add("is-hidden")
  );
  Array.from(document.querySelectorAll("input")).forEach(input =>
    input.classList.add("is-hidden")
  );
}
