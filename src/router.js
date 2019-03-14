import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    //User Profile
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/Profile.vue')
    },
    //Registration
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue')
    },
    //Profile Settings
    {
      path: '/settings',
      name: 'settings',
      component: () => import('./views/Settings.vue')
    },
    //Body History
    {
      path: '/bodyHistory',
      name: 'body history',
      component: () => import('./views/BodyHistory.vue')
    },
    //Food Nutrition
    {
      path: '/nutrition',
      name: 'nutrition',
      component: () => import('./views/Nutrition.vue')
    },
    //Exercise Plans
    {
      path: '/plans',
      name: 'plans',
      component: () => import('./views/Plans.vue')
    },
    //Exercise List
    {
      path: '/exercises',
      name: 'exercises',
      component: () => import('./views/Exercises.vue')
    }
  ]
})
