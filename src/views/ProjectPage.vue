<template>
  <div>single project</div>
</template>

<script>
import { projects } from "@/assets/data/en.json";

export default {
  name: "ProjectPage",
  components: {},
  projects,
  computed: {},
  created() {
    console.log(this.projects);
  },
};
</script>

<style></style>
