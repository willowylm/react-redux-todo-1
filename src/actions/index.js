import {get, post, put} from "../httpRequest";

export const addTodoItem = (text) => dispatch => {
  const data = {value: text, isComplete: false, date: Date.now()}

  return post('/api/todos', data)
    .then(json => dispatch(getList()))
}

export const getList = () => dispatch => {
  return get('/api/todos')
    .then(json => dispatch({type: 'GET_LIST', todos: json}))
}

export const changeTodoItemStatus = (item) => dispatch => {
  return put(`/api/todos/${item.id}`, item)
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

export const getItemById = id => dispatch =>{
  return get(`/api/todos/${id}`)
    .then(json => dispatch({type: 'GET_ITEM', data: json}))
}