import toggleTodoModal from "./toggle-todo-modal.js";
import colourSelection from "./colour-selection.js";

export default function (event) {
  event.stopPropagation();
  document.querySelector("#update-todo-confirm").style.display = "none";
  document.querySelector("#edit-heading").style.display = "none";
  document.querySelector("#create-todo-confirm").style.display = "flex";
  document.querySelector("#create-heading").style.display = "flex";
  const colourSelector = document.querySelector(".colours").children[0];
  colourSelection.setSelectedColourSelector(colourSelector);
  document.querySelector("#todo-title").value = "";
  toggleTodoModal();
}
