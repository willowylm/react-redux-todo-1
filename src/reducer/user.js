export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_USER':
      state = {name: 'zhangsan'}
      return {
        ...state
      }
    default:
      return state
  }
}