import React, { PureComponent } from 'react';
import connect from "react-redux/es/connect/connect";
import * as actions from '../actions';

class SearchItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  searchItems = type => {
    if (type === 'search') {
      this.props.getSearchValue(this.state.value);
    } else {
      this.props.getSearchValue('');
      this.setState({value: ''})
    }
  };

  changeInputValue = e => {
    const value = e.target.value;

    this.setState({
      value
    });
  };

  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-8">
          <input
            type="text"
            className="form-control"
            value={this.state.value}
            onChange={this.changeInputValue}
          />
        </div>
        <div className="col-md-4">
          <button
            className="btn btn-primary"
            onClick={this.searchItems.bind(this, 'search')}
          >
            Search
          </button>
          <button
            className="btn btn-primary ml-2"
            onClick={this.searchItems.bind(this, 'clear')}
          >
            Clear
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSearchValue: (value) => dispatch(actions.searchItems(value))
  }
}

export default connect(null, mapDispatchToProps)(SearchItem);
