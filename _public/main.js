import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'

import App from './App.vue'

// http://www.vuejs-brasil.com.br/vue2-vuex-vue-router-yarn/
// https://vuex.vuejs.org/en/actions.html

new Vue({
  el: '#app',
  render: h => h(App)
})