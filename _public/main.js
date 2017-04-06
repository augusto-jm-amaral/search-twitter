import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'

import App from './App.vue'

import routes from './router-config'
import storeVuex from './vuex/store'

Vue.use(Vuex);
Vue.use(Router);

const store = new Vuex.Store(storeVuex); 

const router = new Router({
  routes,
  mode: 'history'
})

sync(store, router);

// http://www.vuejs-brasil.com.br/vue2-vuex-vue-router-yarn/
// https://vuex.vuejs.org/en/actions.html

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// new Vue({
//   el: '#app',
// })