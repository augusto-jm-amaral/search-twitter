import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'

import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})