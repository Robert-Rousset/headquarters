import forrealziestoggle from "./toggle-todo-modal.js";
import todoIdSelection from "./todo-id-selection.js";
import colourSelection from "./colour-selection.js";
import displayTodos from "./display-todos.js";

export default async function (event) {
  forrealziestoggle();
  event.preventDefault();

  const newTitle = document.querySelector("#todo-title").value.trim();
  const selectedTodoId = todoIdSelection.getSelectedTodoId();
  const selectedColour = colourSelection.getSelectedColour();
  const response = await fetch(`/api/users/update-todo/${selectedTodoId}`, {
    method: "PUT",
    body: JSON.stringify({
      title: newTitle,
      colour: selectedColour,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const todos = await response.json();
    displayTodos(todos);
  }
}
