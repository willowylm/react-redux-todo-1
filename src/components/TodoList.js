import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import InputText from './InputText';
import * as actions from '../actions'

class TodoList extends PureComponent {
  componentDidMount() {
    this.props.getList();
  }

  clickCheckbox = id => {
    this.props.changeItemStatus(id);
  };

  render() {
    return (
      <div className="mt-5">
        {this.props.list.map(item => {
          return (
            <div key={item.id} className="row">
              <div className="col-md-1 offset-md-1">
                <input
                  type="checkbox"
                  style={{ marginTop: '11px', lineHeight: 1.5 }}
                  defaultChecked={item.isComplete}
                  onClick={this.clickCheckbox.bind(this, item.id)}
                />
              </div>
              <div className="col-md-8 mb-2">
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
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeItemStatus: (id) => dispatch(actions.changeTodoItemStatus(id)),
    modifyValue: () => dispatch(),
    getList: () => dispatch(actions.getList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);