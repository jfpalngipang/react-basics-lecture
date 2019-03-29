import React, { Component } from 'react';
import TodoList from './todo/TodoList';
import './App.css';
import './todo/Todo.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div>
          <h2>TO DO</h2>
        </div>
        <div className="todo-list">
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
