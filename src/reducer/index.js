import {combineReducers} from 'redux';
import user from './user'
import list from './todoItem';

export default combineReducers({
  user,
  list
});