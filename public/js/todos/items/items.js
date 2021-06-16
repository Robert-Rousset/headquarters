import displayItems from "./display-items.js";

export default async function (todoId) {
  const response = await fetch(`/api/todos/${todoId}`);
  const todo = await response.json();
  const items = await (await fetch(`/api/todos/${todoId}/items`)).json();
  displayItems(items, todo);
}


