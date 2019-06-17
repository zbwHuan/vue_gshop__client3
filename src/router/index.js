import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

const path = ['/a', '/b']

router.beforeEach((to, form, next) => {
  if (path.indexOf(to.path) !== -1) {
    if (!Vue.store.state.user.user._id) {
      next('/login')
    }
  }
  next()
})

export default router
