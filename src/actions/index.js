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

export const getList = () => {
  return {
    type: 'GET_LIST'
  }
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