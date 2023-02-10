import {createRouter, createWebHistory} from "vue-router";

import MainLayout from "@/layout/MainLayout.vue";
import PageDashboard from "@/pages/PageDashboard.vue";

const routes = [
    {
        path: '/', name: 'MainLayout', component: MainLayout,
        children: [
            {path: '', name: 'DashBoard', component: PageDashboard},
        ]
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;