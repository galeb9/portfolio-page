<template>
  <BaseContainer :title="data.title">
    <div class="projects-list">
      <div class="projects-list__container">
        <div class="projects-items">
          <ProjectItem
            v-for="(project, index) in data.list"
            :key="index"
            :item="project"
            @view-more="open"
          />
        </div>
      </div>
    </div>
  </BaseContainer>
</template>

<script>
import ProjectItem from "@/components/projects/ProjectItem.vue";

export default {
  name: "ProjectsList",
  components: { ProjectItem },
  props: {
    data: { type: Object, default: () => {} },
  },
  data() {
    return {
      popupVisible: false,
      viewedItem: null,
      viewedItemHeading: null,
    };
  },
  methods: {
    close() {
      this.popupVisible = false;
    },
    open(item) {
      this.popupVisible = true;
      this.viewedItem = item;
      this.viewedItemHeading = this.viewedItem.title;
    },
  },
};
</script>

<style lang="scss">
.projects-list {
  &__container {
    display: flex;
    justify-content: center;
    .projects-items {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }
  }
  @media only screen and (max-width: 768px) {
    // margin: 80px 0;
    // padding-bottom: 50px;
    .projects-items {
      flex-wrap: nowrap;
      flex-direction: column;
      gap: 60px;
    }
  }
}
</style>
