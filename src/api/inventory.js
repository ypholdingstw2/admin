import request from '@/utils/request'
export function inventoryList() {
  return request.get('/inventory/list')
}
export function stockIn(data) {
  return request.post('/inventory/in', data)
}
export function stockOut(data) {
  return request.post('/inventory/out', data)
}