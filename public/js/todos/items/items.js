import displayItems from "./display-items.js";
import showBackButton from "./show-back-button.js";

export default async function (todoId) {
  showBackButton();
  const response = await fetch(`/api/todos/${todoId}`);
  const todo = await response.json();
  const items = await (await fetch(`/api/todos/${todoId}/items`)).json();
  displayItems(items, todo);
}
