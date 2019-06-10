// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/Header/Header.vue'
import Star from './components/Star/Star.vue'
import store from './vuex/store'
import './validate'
import './mock/mock-server'
import { Button } from 'mint-ui'

Vue.config.productionTip = false

Vue.component('Header', Header)
Vue.component('Star', Star)
Vue.component(Button.name, Button)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
