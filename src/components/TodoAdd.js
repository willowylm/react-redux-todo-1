import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions'
import { Field, reduxForm } from 'redux-form'
import { formValueSelector } from 'redux-form'


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
    const {handleSubmit, pristine, reset, submitting, item} = this.props;

    console.log(item)
    return (
      <div className="row mt-5">
        <form onSubmit={handleSubmit} className="row col-md-12">
          <div className="col-md-10">
            <Field
              className="form-control"
              name="item"
              component="input"
              type="text"
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const selector = formValueSelector('addTodoForm')

const mapStateToProps = (state) => ({
  item: selector(state, 'item')
})

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (text) => dispatch(actions.addTodoItem(text.item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({form: 'addTodoForm'})(TodoAdd));
