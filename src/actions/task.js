import {getList} from "./index";
import {post} from "../httpRequest";

export const addTask = (text, id) => dispatch => {
  const data = {content: text, todoId: id}

  return post('/api/tasks', data)
    .then(json => dispatch(getList()))
}