import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueBlu from 'vue-blu'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();
Vue.prototype.$axios=axios
Vue.use(ElementUI);
import 'vue-blu/dist/css/vue-blu.min.css'

Vue.use(VueBlu)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
