import { request } from './request'
export function userLogin(loginForm) {
  return request(
    {
      url: 'user/login',
      method: 'post',
      data: {
        loginForm
      }
    }
  )
}