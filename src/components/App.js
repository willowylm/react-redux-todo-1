import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import './App.css';
import UserInfo from './UserInfo';
import TodoAdd from './TodoAdd';
import TodoList from "./TodoList";
import SearchItem from "./SearchItem";

class App extends PureComponent {
  componentWillMount() {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('请登录');
      this.props.history.push('/user');
    }
  }

  render() {
    return (
      <div>
        <UserInfo/>
        <div className="offset-md-3 col-md-6">
          <TodoAdd/>
          <TodoList/>
          <SearchItem/>
        </div>
      </div>
    );
  }
}

export default App;
