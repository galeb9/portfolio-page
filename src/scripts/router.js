import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import NotFound from "@/views/NotFound.vue";
import ProjectsPage from "@/views/ProjectsPage.vue";
import ProjectPage from "@/views/ProjectPage.vue";
import SkillsPage from "@/views/SkillsPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/home",
      redirect: "/",
    },
    {
      path: "/skills",
      component: SkillsPage,
    },
    {
      name: "projects",
      path: "/projects",
      component: ProjectsPage,
    },
    {
      name: "project",
      path: "/projects/:id",
      component: ProjectPage,
      props: true,
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
