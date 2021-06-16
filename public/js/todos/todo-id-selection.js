export default {
  selectedTodoId: "",

  setSelectedTodoId(todoId) {
    this.selectedTodoId = todoId;
  },

  getSelectedTodoId() {
    return this.selectedTodoId;
  },
};
