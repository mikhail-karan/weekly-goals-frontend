import { createStore } from 'vuex'

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
      commit('set_token', token)
    }
  },
  getters: {
    getUser: (state) => state.user,
    getToken: (state) => state.token
  }
})

export default store