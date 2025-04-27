import { createWebHistory, createRouter } from 'vue-router'

import LoginRegisterPage from "../page/loginRegisterPage.vue";
import HomePage from "@/page/homePage.vue";

const routes = [
    {path: '/', component: HomePage},
    {path:'/login',component: LoginRegisterPage},
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})