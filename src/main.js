import Vue from 'vue'
import ElementUI from 'element-ui'
import '_styles/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import '_styles/iconfont/iconfont.css'
import router from './router' 
import App from './App.vue'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
