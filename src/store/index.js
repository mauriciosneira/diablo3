import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import oauth from '../modules/oauth'
import profile from '../modules/profile'
import hero from '../modules/hero'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  key: 'diablo3' ,
  storage: window.localStorage,
  modules: ['oauth']
})

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    setLoading (state, bool) {
      state.loading = bool
    }
  },
  modules: {
    oauth, profile, hero
  },
  plugins: [vuexLocal.plugin]
})
