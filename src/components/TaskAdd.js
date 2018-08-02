import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form'
import * as actions from "../actions/task";

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

class TaskAdd extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isAddTask: false
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isAddTask: nextProps.id === nextProps.current
    })
  }

  onAdd = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.props.task, this.props.id)
  }

  render() {
    const {submitting} = this.props;

    return <div className="row">
      {this.state.isAddTask ? <form className="row col-md-12  mb-3 mt-1">
        <div className="col-md-6 offset-md-2">
          <Field
            name="task"
            component={renderInput}
            type="text"
            validate={[required]}
            warn={alphaNumeric}
          />
        </div>
        <div className="col-md-2">
          <button
            className="btn btn-primary"
            onClick={this.onAdd}
          >
            Add
          </button>
        </div>
      </form>
        : ''}
    </div>
  }

}


const selector = formValueSelector('taskForm')

const mapStateToProps = (state) => ({
  task: selector(state, 'task')
})

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (text, id) => dispatch(actions.addTask(text, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({form: 'taskForm'})(TaskAdd));