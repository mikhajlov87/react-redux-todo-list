import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.css';

const H1 = (props) => {
  const { center, children } = props;
  const classNames = cx('app__h1', {
    'text-center': center,
  });
  return (
    <h1 className={classNames}>
      {children.toUpperCase()}
    </h1>
  );
};

H1.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.string,
};

H1.defaultProps = {
  center: false,
  children: '',
};

export default H1;
