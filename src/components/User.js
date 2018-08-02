import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/user'

class User extends PureComponent {
  onSubmit = (e) => {
    e.preventDefault();
    const {name, password} = e.target;

    console.log(name.value, password.value);

    this.props.onSubmit({name: name.value, password: password.value});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loginError) {
      alert('登陆失败！')
    } else {
      this.props.history.push('/app')
    }
  }

  render() {
    return <div className="col-md-6 offset-md-3 mt-4">
      <div style={{textAlign: 'center'}}><h1>登陆</h1></div>
      <form className="mt-4" onSubmit={this.onSubmit}>
        <div className="form-group row">
          <label htmlFor="name" className="col-sm-2 col-form-label">用户名</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="name"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="password" className="col-sm-2 col-form-label">密码</label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="password"
            />
          </div>
        </div>
        <div style={{textAlign: 'center'}}>
          <button type="submit" className="btn btn-primary">登陆</button>
        </div>
      </form>
    </div>
  }
}

const mapStateToProps = ({user}) => {
  return {
    loginError: user.loginError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (data) => dispatch(actions.login(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);