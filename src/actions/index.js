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