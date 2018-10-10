import React from 'react';
import './style.css';

const Main = (props) => {
  return (
    <main className="app__main">
      {props.children}
    </main>
  );
};

export default Main;
