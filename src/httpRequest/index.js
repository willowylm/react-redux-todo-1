export const get = (url) => {
  const token = localStorage.getItem('token');

  return fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    }
  }).then(response => response.json())
}

export const post = (url, data) => {
  let token = localStorage.getItem('token');

  if (!token) {
    token = "";
  }
  return fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: "POST",
    body: JSON.stringify(data)
  }).then(response => response.json())
}

export const put = (url, data) => {
  const token = localStorage.getItem('token');

  return fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: "PUT",
    body: JSON.stringify(data)
  }).then(response => response.json())
}

