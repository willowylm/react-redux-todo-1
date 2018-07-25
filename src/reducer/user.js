export default (state = {name: 'zhangsan'}, action) => {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state
      }
    default:
      return state
  }
}