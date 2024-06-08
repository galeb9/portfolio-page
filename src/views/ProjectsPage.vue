<template>
  <ProjectsList :data="$options.projects" />
</template>

<script>
import ProjectsList from "@/components/projects/ProjectsList.vue";
import { projects } from "@/assets/data/en.json";

export default {
  name: "ProjectsPage",
  components: { ProjectsList },
  projects,
};
</script>

<style></style>
