import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions'
import { Field, reduxForm, formValueSelector } from 'redux-form'

const required = value => {
  return (value ? undefined : 'Required')}
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined

const renderInput = ({input, type, meta: { touched, error, warning }}) => (
  <div>
    <input className="form-control" {...input} type={type} />
    {touched &&
    ((error && <span style={{color: 'red'}}>{error}</span>) ||
      (warning && <span style={{color: 'orange'}}>{warning}</span>))}
  </div>
)

class TodoAdd extends PureComponent {

  render() {
    const {handleSubmit, submitting} = this.props;

    return (
      <div className="row mt-5">
        <form onSubmit={handleSubmit} className="row col-md-12">
          <div className="col-md-10">
            <Field
              name="item"
              component={renderInput}
              type="text"
              validate={[required]}
              warn={alphaNumeric}
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary" type="submit" disabled={submitting}>
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
