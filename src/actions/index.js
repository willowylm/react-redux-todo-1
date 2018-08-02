import Cookies from 'js-cookie'

const token = Cookies.getJSON('token');

export const addTodoItem = (text) => dispatch => {
  const data = {value: text, isComplete: false, date: Date.now()}

  return fetch('/api/todos', {
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

export const getUser = () => {
  return {
    type: 'GET_USER'
  }
}

export const getList = () => dispatch => {
  return fetch('/api/todos',{
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  }).then(response => response.json())
    .then(json => dispatch({type: 'GET_LIST', todos: json}))
}

export const changeTodoItemStatus = (item) => dispatch => {
  return fetch(`/api/todos/${item.id}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: "PUT",
    body: JSON.stringify(item)
  }).then(response => response.json())
    .then(json => dispatch(getList()))
}

export const changeItemValue = (id, text) => dispatch => {
  dispatch({
    type: 'CHANGE_ITEM_VALUE',
    id,
    text
  })
}

export const searchItems = (value) => {
  return {
    type: 'SEARCH_LIST',
    value
  }
}

export const getItemById = id => ({
  type: 'GET_ITEM',
  id
})