import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

import Homepage from '../pages/Homepage.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import OnlineCourse from '../pages/OnlineCourse.vue'
import AddVidio from '../pages/AddVidio.vue'
import HireOurGraduate from '../pages/HireOurGraduate.vue'
import AboutFazztrack from '../pages/AboutFazztrack.vue'

const routes : Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Homepage, 
    name: 'homepage'
  },
  {
    path: '/login',
    component: Login, 
    name: 'login'
  },
  {
    path: '/register',
    component: Register, 
    name: 'register'
  },
  {
    path: '/online-course',
    component: OnlineCourse, 
    name: 'online-course'
  },
  {
    path: '/add-vidio',
    component: AddVidio, 
    name: 'add-vidio'
  },
  {
    path: '/hire',
    component: HireOurGraduate,
    name: 'hire'
  },
  {
    path: '/about',
    component: AboutFazztrack,
    name: 'about'
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;