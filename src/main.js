import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/base.less'
import './assets/fonts/iconfont.css'
import './plugins/element.js'
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.config.productionTip = false
Vue.prototype.$http = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
