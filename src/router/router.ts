import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import login from "../views/Login.vue"


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        alias: '/main',
        component: login,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router