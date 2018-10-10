import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './style.css';

const TodoItem = (props) => {
  const { completed, title, num, onItemClick, onButtonClick } = props;
  const titleClassName = cx('todo-item__title', {
    'todo-item__title--complited': completed,
  });
  return (
    <div className="todo-item" onClick={onItemClick}>
      <input type="checkbox" checked={completed} readOnly />
      <span className="todo-item__number">{num}.</span>
      <span className={titleClassName}>{title}</span>
      <button className="close" onClick={onButtonClick}>&#10005;</button>
    </div>
  );
};

TodoItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
  onItemClick: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default TodoItem;
