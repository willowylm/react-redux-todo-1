import React, {PureComponent} from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux'

class ItemInfo extends PureComponent {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getItemById(parseInt(id, 10));
  }

  render() {
    return (<div>
      {this.props.item.value}
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