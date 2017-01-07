import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './component/TodoList.jsx';

const $root = document.getElementById('app');

ReactDOM.render(
    <TodoList/>,
    $root
);
