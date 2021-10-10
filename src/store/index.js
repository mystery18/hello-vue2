import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: 'abc'
  },
  getters: {
    reverseUser(state) {
      return state.username.toUpperCase()
    }
  },
  mutations: {
    changeFn(state, payload) {
      state.username = state.username + payload
    }
  },
  actions: {
  },
  modules: {
  }
})
