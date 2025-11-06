// 创建一个路由器，并暴露出去

// 第一步：引入createRoute和createWebHistory
import { createRouter, createWebHistory } from "vue-router";

// 第二步：引入可能需要呈现的所有组件
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import About from "@/pages/About.vue";

// 第三步：创建路由器
const router = createRouter({
    history: createWebHistory(), // 路由器的工作模式
    routes: [ // 所有路由规则
        {
            path: "/home",
            component: Home
        },
        {
            path: "/news",
            component: News
        },
        {
            path: "/about",
            component: About
        }
    ]
})

// 第四步：暴露路由器
export default router