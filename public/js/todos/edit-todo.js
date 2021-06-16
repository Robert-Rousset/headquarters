import colourSelection from "./colour-selection.js";
import todoIdSelection from "./todo-id-selection.js";
import toggleTodoModal from "./toggle-todo-modal.js";

export default function editTodo(event) {
  event.stopPropagation();
  document.querySelector("#create-todo-confirm").style.display = "none";
  document.querySelector("#create-heading").style.display = "none";
  document.querySelector("#update-todo-confirm").style.display = "flex";
  document.querySelector("#edit-heading").style.display = "flex";
  document.querySelector("#todo-title").value = this.dataset.todoTitle;
  todoIdSelection.setSelectedTodoId(this.dataset.todoId);
  const bulmaColourClass = this.dataset.todoColour;
  const colourSelectors = Array.from(document.querySelectorAll(".colour"));
  const colourSelectorToSelect = colourSelectors.find((element) =>
    Array.from(element.classList).includes(bulmaColourClass)
  );
  colourSelection.setSelectedColourSelector(colourSelectorToSelect);
  toggleTodoModal();
}
