import Vue from 'vue'
import moment from 'moment'

Vue.filter('dateFormat', (value, format) => {
  return moment(value).format('YYYY-MM-DD HH:mm:ss')
})