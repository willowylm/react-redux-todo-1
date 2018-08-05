import {post, get} from "../httpRequest";

const saveToken = (token) => {
  return {
    type: 'SAVE_TOKEN',
    token
  }
}

const loginError = () => {
  return {
    type: 'LOGIN_ERR'
  }
}

export const login = (data) => dispatch =>{
  return post('/api/login', data)
    .then(json => dispatch(saveToken(json.token)))
    .catch(error => {
      dispatch(loginError())
    })
}

function saveUserInfo(user) {
  return {
    type: 'SAVE_USER_INFO',
    user
  };
}

export const getUser = () => dispatch => {
  return get('/api/users/current')
    .then(json => dispatch(saveUserInfo(json)))
}