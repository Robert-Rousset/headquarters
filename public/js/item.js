
async function startTodo(todoId) {
    const response = await fetch(`/api/todos/${todoId}`);
    const todo = await response.json();
    const listEl = document.querySelector("#todos");
    listEl.innerHTML = "";
    const todoEl = document.createElement("li");
    todoEl.innerHTML = window.generateToDo(todo);
    listEl.append(todoEl)
    const addNewItemItem = generateAddNewItemItem(todo);
    listEl.append(addNewItemItem);
}

function generateAddNewItemItem(todo) {
    const addNewItemItem = document.createElement('li')
    addNewItemItem.innerHTML = `
    <div class="item button ${todo.colour} notification">
          <div
            class="edit"
            ><i class="far fa-save"></i></div>
            <div class="field">
          <p class="control">
            <input
              class="input"
              id="todo-title"
              type="text"
              placeholder="Add new item"
            />
          </p>
        </div>
          <button class="delete" aria-label="close"></button>
        </div>
    `
    return addNewItemItem;
}