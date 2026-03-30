const TOKEN_KEY = 'family_token'
const USER_KEY = 'family_user'

export function getToken() {
  return localStorage.getItem(TOKEN_KEY)
}

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token)
}

export function setUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user))
}

export function getUser() {
  return JSON.parse(localStorage.getItem(USER_KEY) || '{}')
}

export function logout() {
  localStorage.clear()
}