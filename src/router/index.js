import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/home.vue";
import About from "@/views/about.vue";
import Login from "@/views/login.vue";
import Dashboard from "@/views/dashboard.vue";
import UserDetails from "@/views/UserDetails.vue";


const routes = [
    {
        path: "/",
        name: "Home",
        component:Home 
    },
    // {
    //     path: "/home",
    //     name: "Home",
    //     component:Home 
    // },
    {
        path: "/about",
        name: "About",
        component:About 
    },
    {
        path: "/login",
        name: "Login",
        component:Login 
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component:Dashboard 
    },
    {
        path: "/UserDetails",
        name: "UserDetails",
        component:UserDetails 
    }
];
const isLoggedIn = () =>{
    return localStorage.getItem("token")!==null;
};

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;


