export default {
  __selectedTodoId: "",

  setSelectedTodoId(todoId) {
    this.__selectedTodoId = todoId;
  },

  getSelectedTodoId() {
    return this.__selectedTodoId;
  },
};
