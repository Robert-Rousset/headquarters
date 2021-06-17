export default function (todo) {
  return `
<div class="todo button ${todo.colour} notification">
    <div
    class="edit-todo"
    data-todo-id="${todo.id}"
    data-todo-title="${todo.title}"
    data-todo-colour="${todo.colour}"
    >
      <i class="fas fa-pen-square"></i>
    </div>
    <p>${todo.title}</p>
    <button class="delete" aria-label="close"></button>
</div>
    `;
}
