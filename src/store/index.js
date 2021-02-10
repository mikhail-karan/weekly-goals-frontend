import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state () {
    return {
      user: {},
      token: ''
    }
  },
  mutations: {
    set_user(state, user){
      state.user = user
    },
    set_token(state, token){
      state.token = token
    }
  },
  actions: {
    setUser({commit}, user){
      commit('set_user', user)
    },
    setToken({commit}, token){
      axios.defaults.headers.common = {'Authorization': 'Bearer ' + token}
      commit('set_token', token)
    }
  },
  getters: {
    getUser: (state) => state.user,
    getToken: (state) => state.token
  }
})

export default store