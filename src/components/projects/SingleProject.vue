<template>
  <BaseContainer>
    <ProjectOverview :item="item">
      <ProjectItem :item="item" :hasDescription="false" />
    </ProjectOverview>
  </BaseContainer>
</template>

<script>
import ProjectItem from "@/components/projects/ProjectItem.vue";
import ProjectOverview from "@/components/projects/ProjectOverview.vue";

export default {
  name: "SingleProject",
  components: {
    ProjectOverview,
    ProjectItem,
  },
  props: {
    item: { type: Object, default: () => {} },
  },
};
</script>

<style></style>
