export default {
  __selectedTodoId: null,

  setSelectedTodoId(todoId) {
    this.__selectedTodoId = todoId;
  },

  getSelectedTodoId() {
    return this.__selectedTodoId;
  },
};
