import axios from 'axios'
export function request(config) {
  const service = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5', //后端api地址
    timeout: 5000  //请求时间
  })
  service.interceptors.request.use(config => {
    return config
  },
    err => {
      return err
    })
  service.interceptors.response.use(
    config => {
      return config.data
    },
    err => {
      return err
    }
  )
  return service(config)
}