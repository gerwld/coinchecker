import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
    <App />,
  document.getElementById('root')
);

const appHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty("--app-height", `${window.innerHeight}px`)
 }
 window.addEventListener("resize", appHeight);
 appHeight();