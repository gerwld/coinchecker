import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
    <App />,
  document.getElementById('root')
);


window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});