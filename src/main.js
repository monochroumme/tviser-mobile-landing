import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'swiper/css/swiper.css'
import './assets/styles/app.scss'
import content from '@/locales/content.js'

import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false

Vue.prototype.$content = content;

Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
