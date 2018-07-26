import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions'
import { Field, reduxForm, formValueSelector } from 'redux-form'

class TodoAdd extends PureComponent {

  render() {
    const {handleSubmit, pristine, reset, submitting} = this.props;

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
