import React, { PureComponent } from 'react';
import connect from "react-redux/es/connect/connect";
import * as actions from '../actions';
import { Field, reduxForm, formValueSelector } from 'redux-form'

class SearchItem extends PureComponent {
  render() {
    const {handleSubmit, pristine, reset, submitting} = this.props;

    return (
      <div className="row mt-5">
        <form onSubmit={handleSubmit} className="row col-md-12">
          <div className="col-md-8">
            <Field
              type="text"
              className="form-control"
              name="searchedText"
              component="input"
            />
          </div>
          <div className="col-md-4">
            <button
              className="btn btn-primary"
              type="submit"
            >
              Search
            </button>
            <button
              className="btn btn-primary ml-2"
              onClick={reset}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const selector = formValueSelector('searchItemForm');

const mapStateToProps = state => ({
  searchedText: selector(state, 'searchedText')
})

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (value) => dispatch(actions.searchItems(value.searchedText))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({form: 'searchItemForm'})(SearchItem));
