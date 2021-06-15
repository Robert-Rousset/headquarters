let selectedColour;
let selectedTodoId;

function toggleTodoModal(event) {
  event.preventDefault();

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
    selectedTodoId = this.dataset.todoId;
    const bulmaColourClass = this.dataset.todoColour;
    const colourElements = Array.from(document.querySelectorAll(".colour"));
    const colourElementToSelect = colourElements.find((element) =>
      Array.from(element.classList).includes(bulmaColourClass)
    );
    selectColourElement(colourElementToSelect);
  } else {
    const colourElement = document.querySelector(".colours").children[0];
    selectColourElement(colourElement);
    document.querySelector("#create-todo-confirm").style.display = "flex";
    document.querySelector("#create-heading").style.display = "flex";
    document.querySelector("#todo-title").value = "";
  }

  const modal = document.querySelector("#todo-modal");
  modal.classList.toggle("is-active");
}

async function createList(event) {
  try {
    event.preventDefault();

    const title = document.querySelector("#todo-title").value.trim();
    const response = await fetch("/api/users/create-todo", {
      method: "POST",
      body: JSON.stringify({
        title,
        selectedColour,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.replace("/todo");
    }
  } catch (err) {
    console.log(err);
  }
}

async function updateList(event) {
  event.preventDefault();

  const title = document.querySelector("#todo-title").value.trim();
  const response = await fetch(`/api/users/update-todo/${selectedTodoId}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      selectedColour,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace("/todo");
  }
}

function setUpColors() {
  const colours = Array.from(document.querySelectorAll(".colour"));
  colours.forEach((colour) => {
    colour.addEventListener("click", function selectColour(event) {
      event.preventDefault();
      selectColourElement(this);
    });
  });
}

function selectColourElement(colourElement) {
  deselectAllColours();
  colourElement.classList.add("selected");
  const classesArray = Array.from(colourElement.classList);
  selectedColour = classesArray.find((element) => element.startsWith("is-"));
}

function deselectAllColours() {
  const coloursEls = Array.from(document.querySelectorAll(".colour"));
  coloursEls.forEach((element) => {
    element.classList.remove("selected");
  });
}

function setUpEdits() {
  const edits = Array.from(document.querySelectorAll(".edit"));
  edits.forEach((edit) => {
    edit.addEventListener("click", toggleTodoModal);
  });
}

function setUpModal() {
  document
    .querySelector("#todo-background")
    .addEventListener("click", toggleTodoModal);
  document
    .querySelector("#todo-delete")
    .addEventListener("click", toggleTodoModal);
  document
    .querySelector("#new-list")
    .addEventListener("click", toggleTodoModal);
  document
    .querySelector("#create-todo-confirm")
    .addEventListener("click", createList);

  document
    .querySelector("#update-todo-confirm")
    .addEventListener("click", updateList);
}

function init() {
  setUpColors();
  setUpEdits();
  setUpModal();
}

init();
