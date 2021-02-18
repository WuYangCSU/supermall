import { getToken, setToken, removeToken } from '@/common/login.js'
import { GET_TOKEN, SET_TOKEN, SET_USERNAME } from './mutations_type'
import { userLogin } from '@/network/login.js'
const user = {
  state: {
    token: getToken(),
    name: '',
    image: '',
    introduction: ''
  },
  mutations: {
    [SET_TOKEN](state, token) {
      state.token = token
    },
    [SET_USERNAME](state, userName) {
      state.name = userName
    }
  },
  getters: {
    hastoken(state) {
      return state.token ? true : false
    }
  },
  actions: {
    login({ commit }, loginForm) {
      return new Promise((resolve, reject) => {
        const { userName } = loginForm
        let code = null
        userLogin(loginForm).then(res => {
          code = res.code
          if (code == 200) {
            if (res.data) {
              commit(SET_TOKEN, res.data.token)
              commit(SET_USERNAME, userName)
              setToken(res.data.token)
            }
          }
          else {
            if (res.message) {
              alert(res.message)
            }
          }
          resolve(code)
        })

      })
    }
  }
}
export default user