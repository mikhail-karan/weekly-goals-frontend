import { createRouter, createWebHistory } from 'vue-router'
import WeeklyGoals from '../views/WeeklyGoals.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import AddGoal from '../views/AddGoal.vue'
import MyGoals from '../views/MyGoals.vue'
import Goal from '../views/Goal.vue'

const routes = [
  {path: '/', component: WeeklyGoals},
  {path: '/register', component: Register},
  {path: '/login', component: Login},
  {path: '/addgoal', component: AddGoal},
  {path: '/mygoals', component: MyGoals},
  {path: '/goal/:id', component: Goal, name: 'goal'}
]

export default createRouter({
  history: createWebHistory(),
  routes
})
