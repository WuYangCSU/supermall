import { request } from './request'
export function getHomeMultiDatas() {
  return request({
    url: '/home/multidata'
  })
}
export function getHomeGoodsDatas(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
