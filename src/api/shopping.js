import request from '@/utils/request'
export function shoppingList(status = 'pending') {
  return request.get(`/shopping/list?status=${status}`)
}
export function shoppingAdd(data) {
  return request.post('/shopping/add', data)
}
export function purchased(data) {
  return request.post('/shopping/purchased', data)
}
export function autoGenerate() {
  return request.post('/shopping/auto-generate')
}