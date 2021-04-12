import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Task from "../views/Task.vue";
import New from "../views/New.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/new",
        name: "New",
        component: New,
    },
    {
        path: "/task/:id",
        name: "Task",
        component: Task,
        props: true
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;