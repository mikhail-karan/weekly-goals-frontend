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
      activeDay: new Date().getDay(),
      userNew: {
        currentWeeklyGoals: [
        {
          id: 1,
          goal: 'Read some books',
          status: 'created'
        },
        {
          id: 2,
          goal: 'Workout 3x this week',
          status: 'created'
        },
        {
          id: 3,
          goal: 'Finish project A and B',
          status: 'created'
        },
      ],
      currentJournal: [
        {
          journal: []
        },
        {
          journal: []
        },
        {
          journal: []
        },
        {
          journal: []
        },
        {
          journal: []
        },
        {
          journal: []
        },
        {
          journal: []
        },
      ]
    
    }
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
    },
    add_journal_entry(state, {day, entry, id }){
      state.userNew.currentJournal[day].journal.push({
        entry: entry,
        date: new Date().toDateString(),
        id: id
      })
    },
    delete_journal(state, {day, id}){
      const journalIndex = state.userNew.currentJournal[day].journal.findIndex(_journal => _journal.id === id)
      state.userNew.currentJournal[day].journal.splice(journalIndex, 1)
    },
    add_weekly_goal(state, goal){
      state.userNew.currentWeeklyGoals.push(goal)
    },
    delete_weekly_goal(state, goalId){
      const goalIndex = state.userNew.currentWeeklyGoals.findIndex(_goal => _goal.id === goalId)
      state.userNew.currentWeeklyGoals.splice(goalIndex, 1)
    },
    toggle_weekly_goal(state, goalId){
      const toggleIndex = state.userNew.currentWeeklyGoals.findIndex(_goal => _goal.id === goalId)
      let goal = state.userNew.currentWeeklyGoals[toggleIndex]

      if (goal.status != 'done'){
        goal.status = 'done'
      }
      else {
        goal.status = 'created'
      }
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
    },
    addJournalEntry({commit}, {day, entry}){
      commit('add_journal_entry', {day, entry})
    },
    deleteJournal({commit}, {id, day}){
      commit('delete_journal', {id, day})
    },
    addWeeklyGoal({commit}, goal){
      commit('add_weekly_goal', goal)
    },
    deleteWeeklyGoal({commit}, goalId){
      commit('delete_weekly_goal', goalId)
    },
    toggleWeeklyGoal({commit}, goalId){
      commit('toggle_weekly_goal', goalId)
    }
   

  },
  getters: {
    getUser: (state) => state.user,
    getToken: (state) => state.token,
    getUrl: (state) => state.baseUrl,
    getGoalsKey: (state) => state.goalKey,
    getDay: (state) => state.activeDay,
    getUserNew: (state) => state.userNew,
    getDaysOfWeek: (state) => state.daysOfTheWeek,
  }
})

export default store