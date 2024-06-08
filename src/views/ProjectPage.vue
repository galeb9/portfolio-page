<template>
  <SingleProject v-if="project" :item="$options.projects.list[0]" />
</template>

<script>
import { projects } from "@/assets/data/en.json";
import SingleProject from "@/components/projects/SingleProject.vue";

export default {
  name: "ProjectPage",
  components: { SingleProject },
  projects,
  data() {
    return {
      project: null,
    };
  },
  methods: {
    async pickProjectById() {
      return await this.$options.projects.list.filter(
        (project) => project.id === this.$route.params.id
      );
    },
  },
  created() {
    this.project = this.$options.projects.list[0];

    // this.project = this.pickProjectById();
    console.log(this.project);
  },
};
</script>

<style></style>
