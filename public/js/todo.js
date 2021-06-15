let selectedColour;
let selectedTodoId;

function toggleTodoModal(event) {
  event.preventDefault();

  const clickedOnAnEdit = Array.from(event.currentTarget.classList).includes(
    "edit"
  );
  if (clickedOnAnEdit) {
    document.querySelector("#create-todo-confirm").style.display = "none";
    document.querySelector("#update-todo-confirm").style.display = "flex";
    document.querySelector("#todo-title").value = this.dataset.todoTitle;
    selectedTodoId = this.dataset.todoId;
  } else {
    document.querySelector("#create-todo-confirm").style.display = "flex";
    document.querySelector("#update-todo-confirm").style.display = "none";
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

      const coloursEls = Array.from(document.querySelectorAll(".colour"));
      coloursEls.forEach((element) => {
        element.classList.remove("selected");
      });

      this.classList.add("selected");

      const classesArray = Array.from(this.classList);

      selectedColour = classesArray.find((element) =>
        element.startsWith("is-")
      );
    });
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
