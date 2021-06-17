export default {
  __selectedItemId: "",

  setSelectedItemId(itemId) {
    this.__selectedItemId = itemId;
  },

  getSelectedItemId() {
    return this.__selectedItemId;
  },
};
