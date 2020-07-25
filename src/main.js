import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './directives'
require('./plugins')
import './assets/css/main.styl'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  methods: {
    init () {
      const oauth = JSON.parse(localStorage.getItem('diablo3')).oauth
      if( oauth === null)
        store.dispatch('oauth/getToken', null, { root: true })
    }
  },
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
