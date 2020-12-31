
import { ADD_GOODS_COUNT, ADD_NEW_GOODS } from './mutaions_type'
const cart = {
  state: {
    cartList: []
  },
  mutations: {
    [ADD_GOODS_COUNT](state, payload) {
      payload.count++
    },
    [ADD_NEW_GOODS](state, payload) {
      payload.checked = false
      state.cartList.push(payload)
    }
  },
  getters: {
    cartList: state => {
      return state.cartList
    }
  },
  actions: {
    addCartGoods({ state, commit }, payload) {

      return new Promise((resolve, reject) => {
        let oldProject = state.cartList.find(item => {
          return item.iid == payload.iid
        })
        if (!oldProject) {
          payload.count = 1
          commit(ADD_NEW_GOODS, payload)
          resolve("添加了新的商品")
        }
        else {
          commit(ADD_GOODS_COUNT, oldProject)
          resolve("当前商品数量+1")
        }
      })

    }
  }
}
export default cart 