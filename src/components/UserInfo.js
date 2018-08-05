import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions/user';

class UserInfo extends PureComponent {
  componentDidMount() {
    this.props.getUser();
  }

  logout = () => {
    localStorage.clear();
    this.props.history.push('/user');
  }

  render() {
    return <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="">
          {this.props.user.name}
        </a>
        <a className="navbar-brand" href="/user" onClick={this.logout}>
          登出
        </a>
      </nav>
    </div>
  }
}

const mapStateToProps = ({user}) => {
  return {
    user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(actions.getUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);