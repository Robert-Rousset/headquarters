export default {
  __selectedItemId: null,

  setSelectedItemId(itemId) {
    this.__selectedItemId = itemId;
  },

  getSelectedItemId() {
    return this.__selectedItemId;
  },
};
