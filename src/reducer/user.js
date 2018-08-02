import Cookies from 'js-cookie'

export default (state = {loginError: ''}, action) => {
  switch (action.type) {
    case 'GET_USER':
      state = {name: 'zhangsan'}
      return {
        ...state
      }

    case 'SAVE_TOKEN':
      Cookies.set('token', action.token)
      return Object.assign({}, state, {loginError: false});
    case 'LOGIN_ERR':
      return Object.assign({}, state, {loginError: true});
    default:
      return state
  }
}