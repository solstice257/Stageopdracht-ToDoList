import React from 'react';
import { Button } from '@material-ui/core';
import ReactDOM from 'react-dom';
import './index.css';
import GlobalStateComponent from './Components/GlobalState';
import ToDoListComponentPage from './Pages/ToDoListPage';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ToDoListComponentPage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
