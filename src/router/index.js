import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "@/wiews/HomeView.vue";
import JobsView from "@/wiews/JobsView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView
        },
        {
            path: '/jobs/add',
            name: 'add-jobs',
            component: JobsView
        }
    ]
});

export default router;
