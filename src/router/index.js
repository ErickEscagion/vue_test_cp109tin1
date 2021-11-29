import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Generations',
        name: 'Generations',
        component: () =>
            import ('../views/Generations.vue')
    },
    {
        path: '/First',
        name: 'First',
        component: () =>
            import ('../views/First.vue')
    },
    {
        path: '/Second',
        name: 'Second',
        component: () =>
            import ('../views/Second.vue')
    },
    {
        path: '/AllPokemons',
        name: 'AllPokemons',
        component: () =>
            import ('../views/AllPokemons.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router