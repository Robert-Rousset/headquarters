export default function showCreateTodoButton() {
  const createTodoButton = document.querySelector("#new-list");
  createTodoButton.setAttribute("class", "button");
  const backButton = document.querySelector("#back-button");
  backButton.setAttribute("class", "button is-hidden");
}
