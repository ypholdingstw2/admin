import axios from 'axios'
import { getToken, logout } from './auth.js'
import router from '../router/index.js'

const request = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  timeout: 10000
})

request.interceptors.request.use(config => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

request.interceptors.response.use(res => {
  return res.data
}, err => {
  if (err.response?.status === 401) {
    logout()
    router.push('/login')
  }
  return Promise.reject(err)
})

export default request