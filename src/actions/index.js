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

  // return fetch(`https://www.reddit.com/r/${subreddit}.json`)
  //   .then(response => response.json())
  //   .then(json => dispatch(receivePosts(subreddit, json)))
  console.log(id, text)
  dispatch({
    type: 'CHANGE_ITEM_VALUE',
    id,
    text
  })
  // return {
  //   type: 'CHANGE_ITEM_VALUE',
  //   id,
  //   text
  // }
}

export const searchItems = (value) => {
  return {
    type: 'SEARCH_LIST',
    value
  }
}