import {combineReducers} from 'redux';
import user from './user'
import todo from './todoItem';

export default combineReducers({
  user,
  todo
});