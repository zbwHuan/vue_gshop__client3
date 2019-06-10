/*
  vuex最核心的管理对象store
*/
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import shop from './modules/shop'
import user from './modules/user'
import msite from './modules/msite'

Vue.use(Vuex)

export default new Vuex.Store({
  mutations,
  actions,
  getters,
  modules: {
    msite,
    shop,
    user
  }
})
