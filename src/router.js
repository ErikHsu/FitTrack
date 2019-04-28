import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import EditProfile from './views/EditProfile.vue'
import Profile from './views/Profile.vue'
import AddExercise from './views/AddExercise.vue'
import AddPlan from './views/AddPlan.vue'
import Exercise from './views/Exercise.vue'

import { Globals } from '@/models/api';

Vue.use(Router)

const router = new Router({
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
        //Registration
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        //Login
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        //Edit Profile
        {
            path:'/editProfile',
            name: 'editProfile',
            component: EditProfile
        },
        //Profile
        {
            path:'/profile',
            name: 'profile',
            component: Profile
        },
        //Exercises
        {
            path:'/exercises',
            name: 'exercises',
            component: Exercise
        },
        //Add Exercise
        {
            path:'/addExercise',
            name: 'addExercise',
            component: AddExercise
        },
        //Add Plan
        {
            path:'/addPlan',
            name: 'addPlan',
            component: AddPlan
        }
    ]
})

/*router.beforeEach((to, from, next)=>{
    console.log({ to, from });
    const publicRoutes = ['home', 'login', 'register', 'profile'];
    if(!publicRoutes.includes( to.name ) && !Globals.user){
        Globals.redirectRoute = { name: to.name, path: to.path, params: to.params, query: to.query, hash: to.hash  }
        return next('home');
    }
    next();
})*/

export default router;
