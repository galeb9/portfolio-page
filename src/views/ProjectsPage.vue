<template>
  <ProjectsList class="projects-page__container" :data="$options.projects" />
</template>

<script>
import ProjectsList from "@/components/projects/ProjectsList.vue";
import { projects } from "@/assets/data/en.json";
import scrollToTop from "@/mixins/scrollToTop";

export default {
  name: "ProjectsPage",
  mixins: [scrollToTop],
  components: { ProjectsList },
  projects,
};
</script>

<style>
.projects-page__container {
  padding-bottom: 50px;
}
</style>
