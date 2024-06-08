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
      path: "/skills",
      name: "skills",
      component: SkillsPage,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsPage,
    },
    {
      path: "/projects/:id",
      name: "project",
      component: ProjectPage,
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
