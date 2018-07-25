import React, { Component } from 'react';
import './App.css';
import UserInfo from './UserInfo';
import TodoAdd from './TodoAdd';
import TodoList from "./TodoList";
import SearchItem from "./SearchItem";

class App extends Component {
  render() {
    return (
      <div className="offset-md-3 col-md-6">
        <UserInfo/>
        <TodoAdd/>
        <TodoList/>
        <SearchItem/>
      </div>
    );
  }
}

export default App;
