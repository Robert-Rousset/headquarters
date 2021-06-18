import itemIdSelection from "./item-id-selection.js";
import toggleEditItem from "./toggle-edit-item.js";

export default function (_event) {
  const previousItemId = itemIdSelection.getSelectedItemId();
  const thisItemid = this.dataset.itemId;
  if (previousItemId && previousItemId !== thisItemid) {
    toggleEditItem(previousItemId);
  }
  itemIdSelection.setSelectedItemId(thisItemid);
  toggleEditItem(thisItemid);
}
