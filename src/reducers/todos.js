import * as todosTypes from '../constants/todos';

const initialState = {
  pending: false,
  error: false,
  fulfilled: false,
  todos: [],
};

const todos = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {

    case todosTypes.ADD_TODO:
      const todoItems = state.todos.slice();
      todoItems.push(payload);
      return {
        ...state,
        todos: todoItems,
      };

    case todosTypes.GET_INITIAL_TODOS_PENDING:
      return {
        ...state,
        pending: true,
        error: false,
        fulfilled: false,
      };

    case todosTypes.GET_INITIAL_TODOS_FULFILLED:
      return {
        ...state,
        pending: false,
        error: false,
        fulfilled: true,
        todos: [
          ...payload,
        ],
      };

    case todosTypes.COMPLETE_TODO:
    const computedTodos = state.todos.map((todoItem) => {
      if (todoItem.id !== payload) {
        return todoItem;
      }
      return {
        ...todoItem,
        completed: !todoItem.completed,
      };
    });
      return {
        ...state,
        todos: computedTodos,
      };

    case todosTypes.DELETE_TODO:
      const filteredTodos = state.todos.filter(({ id }) => id !== payload);
      return {
        ...state,
        todos: filteredTodos,
      };

    default:
      return state;
  }
};

export default todos;
