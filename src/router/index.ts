import {createRouter, createWebHistory, RouteRecordRaw, RouteLocationNormalized, NavigationGuardNext} from 'vue-router'

import Homepage from '../pages/Homepage.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import OnlineCourse from '../pages/OnlineCourse.vue'
import AddVidio from '../pages/AddVidio.vue'
import Profile from '../pages/Profile.vue'
import Portofolio from '../pages/Portofolio.vue'
import HireOurGraduate from '../pages/HireOurGraduate.vue'
import AboutFazztrack from '../pages/AboutFazztrack.vue'

const privateRoute = (_to: RouteLocationNormalized, _from : RouteLocationNormalized, next : NavigationGuardNext) => {
  const token  =localStorage.getItem('token')
  if(token){
    next()
  }else{
    next('/login')
  }
}


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
    path: '/profile/about',
    component: Profile, 
    name: 'profile-about',
    beforeEnter : [privateRoute]
  },
  {
    path: '/profile/portofolio',
    component: Portofolio, 
    name: 'profile-portofolio',
    beforeEnter : [privateRoute]
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