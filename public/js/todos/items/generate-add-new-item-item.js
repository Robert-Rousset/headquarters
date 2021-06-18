export default function (todo) {
  const addNewItemItem = document.createElement("li");
  addNewItemItem.innerHTML = `
<div class="item button ${todo.colour} notification">
    <div class="create-item-button is-hidden"><i class="far fa-save"></i></div>
    <div class="field">
      <p class="control">
          <input
          class="input item-input"
          type="text"
          placeholder="Add new item"
          />
      </p>
    </div>
</div>
    `;
  return addNewItemItem;
}