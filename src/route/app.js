import { createWebHistory, createRouter } from 'vue-router'

import LoginRegisterPage from "../page/loginRegisterPage.vue";

const routes = [
    {path:'/login',component: LoginRegisterPage},
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})