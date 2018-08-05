export default (state = {loginError: '', name: ''}, action) => {
  switch (action.type) {
    case 'SAVE_USER_INFO':
      return Object.assign({}, state, {name: action.user.name})

    case 'SAVE_TOKEN':
      localStorage.setItem('token', action.token)
      return Object.assign({}, state, {loginError: false});
    case 'LOGIN_ERR':
      return Object.assign({}, state, {loginError: true});
    default:
      return state
  }
}