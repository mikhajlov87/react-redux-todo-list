import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Input = (props) => {
  const { type, value, onChange } = props;
  return (
    <input
      className="input"
      onChange={onChange}
      type={type}
      value={value}
    />
  );
};

Input.propTpes = {
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
