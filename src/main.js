import Vue from 'vue'
import ElementUI from 'element-ui'
import '_styles/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import '_styles/iconfont/iconfont.css'
import router from './router' 
import App from './App.vue'
import store from './store/'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
