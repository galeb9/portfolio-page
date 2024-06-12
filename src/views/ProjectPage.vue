<template>
  <SingleProject v-if="project" :item="project" />
</template>

<script>
import SingleProject from "@/components/projects/SingleProject.vue";
import { projects } from "@/assets/data/en.json";

export default {
  name: "ProjectPage",
  components: { SingleProject },
  projects,
  computed: {
    project() {
      return this.$options.projects.list.filter(
        (project) => project.id == this.$route.params.id
      )[0];
    },
  },
};
</script>
