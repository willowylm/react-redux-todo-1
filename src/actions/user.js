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
  console.log(data)

  fetch('/api/login',{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(data)
  }).then(response => response.json())
    .then(json => dispatch(saveToken(json.token)))
    .catch(error => {
      dispatch(loginError())
    })
}