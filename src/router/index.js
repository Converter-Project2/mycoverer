import { createRouter, createWebHistory } from "vue-router";
import loginPage from "../views/loginPage.vue";
import singUpPage from "../views/singUpPage.vue";
import mainPage from "../views/mainPage.vue";


const routes = [{
        path: "/",
        name: "mainPage",
        component: mainPage,
    },
    {
        path: "/loginPage",
        name: "loginPage",
        component: loginPage,
    },
    {
        path: "/singUpPage",
        name: "singUpPage",
        component: singUpPage,
    },

];


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;