import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state () {
    return {
      user: JSON.parse(window.localStorage.getItem('user')) || {},
      token: window.localStorage.getItem('token') || '',
      baseUrl: import.meta.env.VITE_APP_URL,
      goalKey: 1,
      daysOfTheWeek: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      activeDay: new Date().getDay()
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
    },
    increment_goal_key(state){
      state.goalKey++
      console.log(state.goalKey)
    },
    change_day(state, day){
      state.activeDay = day
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
      axios.defaults.headers.common = {'Authorization': ''}
    },
    incrementGoalKey({commit}){
      commit('increment_goal_key')
    },
    changeDay({commit}, day){
      commit('change_day', day)
    }
   

  },
  getters: {
    getUser: (state) => state.user,
    getToken: (state) => state.token,
    getUrl: (state) => state.baseUrl,
    getGoalsKey: (state) => state.goalKey,
    getDay: (state) => state.activeDay
  }
})

export default store