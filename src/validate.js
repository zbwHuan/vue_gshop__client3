import Vue from 'vue'
import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'

Vue.use(VeeValidate)

VeeValidate.Validator.localize('zh_CN', {
  messages: zh_CN.messages,
  attributes: {
    name: '用户名',
    pwd: '密码',
    captcha: '验证码',
    phone: '手机号',
    code: '验证码'
  }
})

VeeValidate.Validator.extend('mobile', {
  validate: value => {
    return /^1\d{10}$/.test(value)
  },
  getMessage: field => field + '必须是11位手机号码'
})

VeeValidate.Validator.extend('code', {
  validate: value => {
    return /^\d{6}$/.test(value)
  },
  getMessage: field => field + '验证码格式无效'
})

VeeValidate.Validator.extend('captcha', {
  validate: value => {
    return /^[a-zA-Z0-9]{4}$/.test(value)
  },
  getMessage: field => field + '验证码格式无效'
})


