import forrealziestoggle from "./toggle-todo-modal.js";
import todoIdSelection from "./todo-id-selection.js";
import colourSelection from "./colour-selection.js";

export default function (event) {
  event.preventDefault();
  event.stopPropagation();

  const clickedOnAnEdit = Array.from(event.currentTarget.classList).includes(
    "edit"
  );
  document.querySelector("#update-todo-confirm").style.display = "none";
  document.querySelector("#create-todo-confirm").style.display = "none";
  document.querySelector("#edit-heading").style.display = "none";
  document.querySelector("#create-heading").style.display = "none";
  if (clickedOnAnEdit) {
    document.querySelector("#update-todo-confirm").style.display = "flex";
    document.querySelector("#edit-heading").style.display = "flex";
    document.querySelector("#todo-title").value = this.dataset.todoTitle;
    todoIdSelection.setSelectedTodoId(this.dataset.todoId);
    const bulmaColourClass = this.dataset.todoColour;
    const colourElements = Array.from(document.querySelectorAll(".colour"));
    const colourElementToSelect = colourElements.find((element) =>
      Array.from(element.classList).includes(bulmaColourClass)
    );
    colourSelection.selectColourElement(colourElementToSelect);
  } else {
    const colourElement = document.querySelector(".colours").children[0];
    selectColourElement(colourElement);
    document.querySelector("#create-todo-confirm").style.display = "flex";
    document.querySelector("#create-heading").style.display = "flex";
    document.querySelector("#todo-title").value = "";
  }

  forrealziestoggle();
}
