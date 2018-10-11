import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import uniqueId from 'lodash/uniqueId';
import Header from '../components/Header';
import H1 from '../components/H1';
import Main from '../components/Main';
import Form from '../components/Form';
import TodoItem from '../components/TodoItem';
import * as pageActions from '../actions/todos';

class App extends React.Component {
  static defaultProps = {
    todos: [],
  };

  componentDidMount() {
    this.props.todosActions.getInitialTodos();
  }

  render() {
    const { fulfilled, pending, todos } = this.props;
    const nextItemId = uniqueId();
    return (
      <div className="app__container">
        <Header>
          <H1 center>todo list</H1>
          <Form
            nextItemId={nextItemId}
            onSubmit={(newTodo) => this.addTodoItem(newTodo)}
          />
        </Header>
        <Main>
          {pending && (
            <div>Loading todos...</div>
          )}
          {fulfilled && (
            (todos.length > 0)
              ? (
                todos.map(({ id, completed, title }, idx) => (
                  <TodoItem
                    num={++idx}
                    key={id}
                    completed={completed}
                    title={title}
                    onItemClick={() => this.completeTodo(id)}
                    onButtonClick={(ev) => this.deleteTodo(ev, id)}
                  />
                )))
              : <div>Nothing to do! :)</div>
          )}
        </Main>
      </div>
    );
  }

  addTodoItem = (todo) => {
    this.props.todosActions.addTodo(todo);
  };

  completeTodo = (todoId) => {
    this.props.todosActions.completeTodo(todoId);
  };

  deleteTodo = (ev, todoId) => {
    ev.stopPropagation();
    this.props.todosActions.deleteTodo(todoId);
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    todosActions: bindActionCreators(pageActions, dispatch),
  };
};

const mapStateToProps = (state) => {
  return {
    pending: state.todos.pending,
    todos: state.todos.todos,
    error: state.todos.error,
    fulfilled: state.todos.fulfilled,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
