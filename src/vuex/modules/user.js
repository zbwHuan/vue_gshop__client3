import {reqLogout} from '../../api'
import {
  RECEIVE_USER,
  RESET_USER
} from '../mutation-types'

const state = {
  user: {}
}
const actions = {
  async logout ({commit}) {
    const result = await reqLogout()
    if(result.code === 0){
      commit(RESET_USER)
    }
  }
}
const mutations = {
  [RECEIVE_USER](state, user) {
    state.user = user
  },
  [RESET_USER](state) {
    state.user = {}
  }
}
const getters = {}

export default {
  state,
  actions,
  mutations,
  getters
}