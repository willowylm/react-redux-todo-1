import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import InputText from './InputText';
import * as actions from '../actions'
import { Link } from 'react-router-dom';
import Task from './Task'
import TaskAdd from "./TaskAdd";

class TodoList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      current: null
    }
  }

  componentDidMount() {
    this.props.getList();
  }

  clickCheckbox = item => {
    item.isComplete = !item.isComplete;
    this.props.changeItemStatus(item);
  };

  selectCurrent = (id) => {
    console.log(id)
    this.setState({current: id})
  }

  render() {
    return (
      <div className="mt-5">
        {this.props.list.map(item => {
          return (
            <div key={item.id}>
              <div className="row">
                <div className="col-md-1 offset-md-1">
                  <input
                    type="checkbox"
                    style={{ marginTop: '11px', lineHeight: 1.5 }}
                    defaultChecked={item.isComplete}
                    onClick={this.clickCheckbox.bind(this, item)}
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <Link to={`/items/${item.id}`}>
                    {item.isComplete ? (
                      <div
                        style={{
                          marginTop: '7px',
                          marginBottom: '7px',
                          lineHeight: 1.5
                        }}
                      >
                        <del>{item.value}</del>
                      </div>
                    ) : (
                      <InputText
                        item={item}
                        modifyValue={value =>
                          this.props.modifyValue(item.id, value)
                        }
                      />
                    )}
                  </Link>
                </div>
                <div className="col-md-2">
                  <button
                    className="btn btn-primary"
                    onClick={this.selectCurrent.bind(this, item.id)}>
                    +
                  </button>
                </div>
              </div>
              <Task tasks={item.tasks}/>
              <TaskAdd id={item.id} current={this.state.current}/>
            </div>
          );
        })}
      </div>
    );
  }
}

const searchList = (list, searchedText) => {
  let filteredList = list.filter(item => item.value.includes(searchedText));
  if (!searchedText) {
    filteredList = list;
  }

  return filteredList;
}

const mapStateToProps = ({todo}) => {
  const {list, searchedText} = todo
  return {
    list: searchList(list, searchedText)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeItemStatus: (item) => dispatch(actions.changeTodoItemStatus(item)),
    modifyValue: (id, text) => dispatch(actions.changeItemValue(id, text)),
    getList: () => dispatch(actions.getList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
