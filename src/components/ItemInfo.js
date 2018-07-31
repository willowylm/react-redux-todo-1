import React, {PureComponent} from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux'
import Link from "react-router-dom/es/Link";
import "./App.css"

class ItemInfo extends PureComponent {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getItemById(parseInt(id, 10));
  }

  render() {
    const {item} = this.props
    const date = new Date();

    console.log(item);
    date.setTime(item.date);
    return (<div className="col-md-6 offset-md-3 mt-2">
      <Link to='/app'>返回</Link>
      <table className="table mt-5 App">
        <thead>
        <tr>
          <th>事情</th>
          <th>创建时间</th>
          <th>是否完成</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td width="45%">{item.value}</td>
          <td width="35%">{date.toLocaleString()}</td>
          <td width="20%">{item.isComplete ? '是' : '否'}</td>
        </tr>
        </tbody>
      </table>
    </div>)
  }
}

const mapStateToProps = state => ({
  item: state.todo.item
})

const mapDispatchToProps = dispatch => ({
  getItemById: (id) => dispatch(actions.getItemById(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemInfo);