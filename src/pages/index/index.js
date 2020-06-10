import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueBlu from 'vue-blu'
import 'vue-blu/dist/css/vue-blu.min.css'
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();
Vue.use(VueBlu)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
