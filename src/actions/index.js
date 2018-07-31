export const addTodoItem = (text) => {
  return {
    type: 'ADD_TODO',
    text
  }
}

export const getUser = () => {
  return {
    type: 'GET_USER'
  }
}

export const getList = () => dispatch => {
  return fetch('/api/todos')
    .then(response => response.json())
    .then(json => dispatch({type: 'GET_LIST', todos: json}))
}

export const changeTodoItemStatus = (id) => {
  return {
    type: 'CHANGE_ITEM',
    id
  }
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