import { createRouter, createWebHistory } from 'vue-router'
import WeeklyGoals from '../views/WeeklyGoals.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import AddGoal from '../views/AddGoal.vue'

const routes = [
  {path: '/', component: WeeklyGoals},
  {path: '/register', component: Register},
  {path: '/login', component: Login},
  {path: '/addgoal', component: AddGoal},
]

export default createRouter({
  history: createWebHistory(),
  routes
})
