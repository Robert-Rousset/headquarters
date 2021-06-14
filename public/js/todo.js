async function toggleCreateTodoModal(event) {
  event.preventDefault();

  const modal = document.querySelector("#create-todo-modal");
  modal.classList.toggle("is-active");
}

async function createList(event) {
  event.preventDefault();

  const title = document.querySelector("#create-todo-title").value.trim();
  const response = await fetch("/api/users/create-todo", {
    method: "POST",
    body: JSON.stringify({
      title,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace("/todo");
  }
}

document
  .querySelector("#create-todo-background")
  .addEventListener("click", toggleCreateTodoModal);
document
  .querySelector("#create-todo-delete")
  .addEventListener("click", toggleCreateTodoModal);
document
  .querySelector("#new-list")
  .addEventListener("click", toggleCreateTodoModal);
document
  .querySelector("#create-todo-confirm")
  .addEventListener("click", createList);
