import request from '@/utils/request'
export function dashboard() {
  return request.get('/dashboard')
}