import Vue from 'vue'
import { reqInfo, reqGoods, reqRatings } from '../../api'

import {
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  ADD_FOOD_COUNT,
  REDUCE_FOOD_COUNT,
  UPDATE_RATINGS
} from '../mutation-types'
const state = {
  info: {},
  ratings: [],
  goods: [],
  cartFoods: []
}
const actions = {
  async getRatings ({ commit }) {
    const result = await reqRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, { ratings })
    }
  },
  async getGoods ({ commit }) {
    const result = await reqGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, { goods })
    }
  },
  async getInfo ({ commit }) {
    const result = await reqInfo()
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO, { info })
    }
  },
  updateFoodCount ({ commit }, { isAdd, food }) {
    if (isAdd) {
      commit(ADD_FOOD_COUNT, { food })
    } else {
      commit(REDUCE_FOOD_COUNT, { food })
    }
  }
}
const mutations = {
  [RECEIVE_GOODS] (state, { goods }) {
    state.goods = goods
  },
  [RECEIVE_INFO] (state, { info }) {
    state.info = info
  },
  [RECEIVE_RATINGS] (state, { ratings }) {
    state.ratings = ratings
  },
  [ADD_FOOD_COUNT] (state, { food }) {
    if (!food.count) {
      Vue.set(food, 'count', 1)
      state.cartFoods.push(food)
    } else {
      food.count++
    }
  },
  [REDUCE_FOOD_COUNT] (state, { food }) {
    if (food.count > 0) {
      food.count--
      if (food.count === 0) {
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },
  [UPDATE_RATINGS] (state, ratings) {
    state.ratings = ratings
  }
}
const getters = {
  totalCount (state) {
    return state.cartFoods.reduce((pre, food) => pre + food.count, 0)
  },
  totalPrice (state) {
    return state.cartFoods.reduce((pre, food) => pre + food.count * food.price, 0)
  },
  goodRatings (state) {
    return state.ratings.reduce((pre, rating) => {
      if (rating.rateType === 0) {
        pre.push(rating)
      }
      return pre
    }, [])
  },
  badRatings (state) {
    return state.ratings.reduce((pre, rating) => {
      if (rating.rateType === 1) {
        pre.push(rating)
      }
      return pre
    }, [])
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}