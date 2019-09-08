import Vue from 'vue'
import Router from 'vue-router'

import Main from '../pages/main.vue'
import Login from '../pages/login.vue'
import Welcome from '../pages/welcome.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Main
        },
        {
            path: '/main',
            component: Main
        },
        {
            path: '/login/:p',
            component: Login
        },
        {
            path: '/welcome/:p',
            component: Welcome
        }
    ]
})