export default function generateItem(item, colourString) {
  const newItem = document.createElement("li");
  newItem.innerHTML = `
    <div class="item button ${colourString} notification">
          <div
            class="update-item-button is-hidden" 
            ><i class="far fa-save"></i></div>
            <div class="field">
          <p class="control">
            <input
              class="input item-input is-hidden"
              type="text"
              placeholder="Add new item"
            />
            <p>${item.content}</p>
          </p>
        </div>
          <button class="delete" aria-label="close"></button>
        </div>
    `;
  return newItem;
}