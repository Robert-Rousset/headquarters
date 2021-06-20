import { addItem } from "./generate-add-new-item-item-element.js";

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
  Array.from(document.querySelectorAll(".item input")).forEach(input =>
    input.classList.add("is-hidden")
  );
  document.querySelector(".confirm-add-item-button").classList.add("is-fade");

  const addClicker = document.querySelector("#add-clicker");
  addClicker.removeEventListener("click", addItem);
  addClicker.addEventListener("click", addItem);
}
