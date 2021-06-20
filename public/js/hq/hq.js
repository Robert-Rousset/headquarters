import items from "../todos/items/items.js";

const hqTodoLists = Array.from(document.querySelectorAll(".hq-todo-list"));
hqTodoLists.forEach(hqTodoList => {
  hqTodoList.onclick = hqTodoListClick;
});

function hqTodoListClick(_event) {
  const todo = {
    id: this.dataset.id,
    title: this.dataset.title,
    colour: this.dataset.colour,
  };
  document.location.replace("/todo");
  items(todo);
}
