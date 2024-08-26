import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "@/wiews/HomeView.vue";
import JobsView from "@/wiews/JobsView.vue";
import NotFoundView from "@/wiews/NotFoundView.vue";
import JobView from "@/wiews/JobView.vue";
import AddJobView from "@/wiews/AddJobView.vue";

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
            path: '/jobs/:id',
            name: 'job',
            component: JobView
        },
        {
            path: '/jobs/add',
            name: 'add-job',
            component: AddJobView
        },
        {
            path: '/:catchAll(.*)',
            name: '404',
            component: NotFoundView
        },
    ]
});

export default router;
