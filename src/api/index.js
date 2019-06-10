import ajax from './ajax'

const BASE = '/api'

// 1、根据经纬度获取位置详情
export const reqAddress = (longitude, latitude) => ajax(BASE + `/position/${latitude},${longitude}`)

// 2. 获取食品分类列表
export const reqCategorys = () => ajax(BASE + '/index_category')

// 3. 根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax(BASE + '/shops', {latitude, longitude})

// 4. 发送短信验证码
export const reqSendCode = (phone) => ajax(BASE + '/sendcode', {phone})

// 5. 用户名密码登录
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE + '/login_pwd', {name, pwd, captcha}, 'POST')

// 6. 手机号验证码登录
export const reqSmsLogin = (phone, code) => ajax(BASE + '/login_sms', {phone, code}, 'POST')

// 7. 获取用户登录信息
export const reqUser = () => ajax(BASE + '/userinfo')

// 8. 退出登录
export const reqLogout = () => ajax(BASE + '/logout')


