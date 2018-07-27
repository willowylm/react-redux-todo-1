import {combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import user from './user'
import todo from './todoItem';

export default combineReducers({
  user,
  todo,
  form: reduxFormReducer
});