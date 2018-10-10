import * as types from '../constants/todos';

export const getInitialTodos = () => (dispatch) => {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  dispatch(getTodoItemsPending());
  fetch(url)
    .then(res => res.json())
    .then((data) => {
      const todoItems = data.slice(0, 2);
      dispatch(getTodoItemsFulfilled(todoItems));
    })
    .catch((err) => {
      dispatch(getTodoItemsRejected());
    })
};

export const getTodoItemsPending = () => ({
  type: types.GET_INITIAL_TODOS_PENDING,
});

export const getTodoItemsFulfilled = (data) => ({
  type: types.GET_INITIAL_TODOS_FULFILLED,
  payload: data,
});

export const getTodoItemsRejected = () => ({
  type: types.GET_INITIAL_TODOS_REJECTED,
});

export const addTodo = (todo) => ({
  type: types.ADD_TODO,
  payload: todo,
});

export const completeTodo = (todoId) => ({
  type: types.COMPLETE_TODO,
  payload: todoId,
});

export const deleteTodo = (todoId) => ({
  type: types.DELETE_TODO,
  payload: todoId,
});
