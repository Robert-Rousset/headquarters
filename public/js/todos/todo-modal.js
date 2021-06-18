import sendTodoRequest from "./send-todo-request.js";

export default {
  init() {
    document.querySelector("#todo-background").onclick = _ => this.hide();
    document.querySelector("#todo-delete").onclick = _ => this.hide();
    document.querySelector("#add-todo-confirm").onclick = _ =>
      this.confirmAdd();
    document.querySelector("#edit-todo-confirm").onclick = _ =>
      this.confirmEdit();
    Array.from(document.querySelectorAll(".colour")).forEach(colourEl => {
      colourEl.onclick = event => this.selectColour(event.target);
    });
  },

  show(addOrEdit) {
    showHeading(addOrEdit);
    showConfirmButton(addOrEdit);
    document.querySelector("#todo-modal").classList.add("is-active");
  },

  hide() {
    document.querySelector("#todo-modal").classList.remove("is-active");
  },

  selectColour(colourElement) {
    deselectColourElements();
    colourElement.classList.add("selected");
    const colourClass = Array.from(colourElement.classList).find(
      classListElement => classListElement.startsWith("is-")
    );
    this.selectedColour = colourClass;
  },

  confirmAdd(_event) {
    sendTodoRequest("/api/users/create-todo", "POST", this.selectedColour);
  },

  confirmEdit(_event) {
    sendTodoRequest(
      `/api/users/update-todo/${this.selectedTodoId}`,
      "PUT",
      this.selectedColour
    );
  },
};

function deselectColourElements() {
  const colourElements = Array.from(document.querySelectorAll(".colour"));
  colourElements.forEach(colourElement => {
    colourElement.classList.remove("selected");
  });
}

function showHeading(addOrEdit) {
  document.querySelector("#edit-heading").classList.add("is-hidden");
  document.querySelector("#add-heading").classList.add("is-hidden");
  document.querySelector(`#${addOrEdit}-heading`).classList.remove("is-hidden");
}

function showConfirmButton(addOrEdit) {
  document.querySelector("#edit-todo-confirm").classList.add("is-hidden");
  document.querySelector("#add-todo-confirm").classList.add("is-hidden");
  document
    .querySelector(`#${addOrEdit}-todo-confirm`)
    .classList.remove("is-hidden");
}
