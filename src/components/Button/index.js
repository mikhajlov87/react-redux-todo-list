import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Button = (props) => {
  const { onClick, title, toUpperCase, type } = props;
  const computedTitle = toUpperCase ? title.toUpperCase() : title;
  return (
    <button className="button" onClick={onClick} type={type}>
      {computedTitle}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  toUpperCase: PropTypes.bool,
  type: PropTypes.string,
}

Button.defaultProps = {
  onClick: () => {},
  title: '',
  toUpperCase: false,
  type: 'button',
};

export default Button;
