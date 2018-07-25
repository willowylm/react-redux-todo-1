import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import UserInfo from './UserInfo';
import TodoAdd from './TodoAdd';

class App extends Component {
  render() {
    console.log(this.props.list)
    return (
      <div className="offset-md-3 col-md-6">
        <UserInfo/>
        <TodoAdd/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    list: state.list
  }
}

export default connect(mapStateToProps)(App);
