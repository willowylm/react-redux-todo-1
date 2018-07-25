import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions'

class TodoAdd extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  addTodo = () => {
    this.props.onAdd(this.state.inputValue);
  };

  changeInputValue = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-10">
          <input
            type="text"
            className="form-control"
            value={this.state.inputValue}
            onChange={this.changeInputValue}
          />
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary" onClick={this.addTodo}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (text) => dispatch(actions.addTodoItem(text))
  }
}

export default connect(null, mapDispatchToProps)(TodoAdd);
