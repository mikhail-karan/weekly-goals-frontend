import { createRouter, createWebHistory } from 'vue-router'
import WeeklyGoals from '../views/WeeklyGoals.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import AddGoal from '../views/AddGoal.vue'
import MyGoals from '../views/MyGoals.vue'
import LoginRedirect from '../views/LoginRedirect.vue'
import Goal from '../views/Goal.vue'
import DemoGoal from '../views/DemoGoal.vue'

const routes = [
  {path: '/', component: DemoGoal},
  {path: '/weeklyGoals', component: WeeklyGoals},
  {path: '/register', component: Register},
  {path: '/login', component: Login},
  {path: '/addgoal', component: AddGoal},
  {path: '/mygoals', component: MyGoals},
  {path: '/goal/:id', component: Goal, name: 'goal'},
  {path: '/auth/:providerName/callback', component: LoginRedirect, name: 'Login Redirect'}
]

export default createRouter({
  history: createWebHistory(),
  routes
})
