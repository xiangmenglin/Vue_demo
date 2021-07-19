import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router' //引入路由配置
import axios from "axios"
Vue.prototype.$axios = axios
Vue.config.productionTip = false
 
new Vue({
  render: h => h(App),
  router, //使用路由配置
}).$mount('#app')
