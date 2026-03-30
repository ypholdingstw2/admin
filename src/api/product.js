import request from '@/utils/request'
export function productList() {
  return request.get('/product/list')
}