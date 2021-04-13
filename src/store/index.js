import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state () {
    return {
      user: JSON.parse(window.localStorage.getItem('user')) || {},
      token: window.localStorage.getItem('token') || ''
    }
  },
  mutations: {
    set_user(state, user){
      state.user = user
      window.localStorage.setItem('user', JSON.stringify(user))
    },
    set_token(state, token){
      state.token = token
      window.localStorage.setItem('token', token)
    },
    logout(state){
      state.user = {}
      state.token = ''
      window.localStorage.removeItem('user')
      window.localStorage.removeItem('token')
    }
  },
  actions: {
    setUser({commit}, user){
      commit('set_user', user)
    },
    setToken({commit}, token){
      axios.defaults.headers.common = {'Authorization': 'Bearer ' + token}
      commit('set_token', token)
    },
    logout({commit}){
      commit('logout')
    }
  },
  getters: {
    getUser: (state) => state.user,
    getToken: (state) => state.token
  }
})

export default store