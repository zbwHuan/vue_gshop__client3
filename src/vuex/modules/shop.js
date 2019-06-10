import {reqInfo, reqGoods, reqRatings} from '../../api'
import {
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS
} from '../mutation-types'
const state = {
  info: {},
  ratings: [],
  goods: []
}
const actions = {
  async getRatings ({commit}) {
    const result = await reqRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
    }
  },
  async getGoods ({commit}) {
    const result = await reqGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
    }
  },
  async getInfo ({commit}) {
    const result = await reqInfo()
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  }
}
const mutations = {
  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
  },
  [RECEIVE_INFO](state, {info}) {
    state.info = info
  },
  [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
  }
}
const getters = {}

export default {
  state,
  actions,
  mutations,
  getters
}