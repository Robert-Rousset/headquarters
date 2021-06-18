export default function showBackButton() {
  const createTodoButton = document.querySelector("#new-list");
  createTodoButton.setAttribute("class", "button is-hidden");
  const backButton = document.querySelector("#back-button");
  backButton.setAttribute("class", "button");
}
