function generateItem(item, colourString) {
    const addNewItemItem = document.createElement("li");
    addNewItemItem.innerHTML = `
    <div class="item button ${colourString} notification">
          <div
            class="create-item-button" 
            ><i class="far fa-save"></i></div>
            <div class="field">
          <p class="control">
            <input
              class="input item-input"
              type="text"
              placeholder="Add new item"
            />
            <p>${item.content}</p>
          </p>
        </div>
          <button class="delete" aria-label="close"></button>
        </div>
    `;
    return addNewItemItem;
}