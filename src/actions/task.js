import {getList} from "./index";
import Cookies from 'js-cookie'

const token = Cookies.getJSON('token');

export const addTask = (text, id) => dispatch => {
  const data = {content: text, todoId: id}

  return fetch('/api/tasks', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: "POST",
    body: JSON.stringify(data)
  }).then(response => response.json())
    .then(json => dispatch(getList()))
}