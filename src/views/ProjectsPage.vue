<template>
  <ProjectsList :data="$options.projects" />
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
