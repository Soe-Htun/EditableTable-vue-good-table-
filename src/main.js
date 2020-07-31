import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueGoodTablePlugin from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'
Vue.config.productionTip = false
Vue.use(VueGoodTablePlugin);
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
