import { request } from './request.js'
export function getCategory() {
  return request({
    url: '/category'
  })
}
export function getCategoryInfo(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}