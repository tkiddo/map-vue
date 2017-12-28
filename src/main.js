import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/style.scss'
Vue.use(ElementUi)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
