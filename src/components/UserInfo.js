import React, {PureComponent} from 'react';
import {connect} from 'react-redux'

class UserInfo extends PureComponent {
  render() {
    return <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          {this.props.user.name}
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

export default connect(mapStateToProps)(UserInfo);