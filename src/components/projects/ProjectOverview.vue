<template>
  <div class="project-overview">
    <div class="project-overview__main">
      <div class="project-overview__main-img">
        <slot></slot>
      </div>
      <div class="project-overview__main-text">
        <div class="mb-20">
          <BaseHeading
            :text="item.title"
            element="h3"
            class="border-bottom"
            margin="10px 0"
          />
          <BaseText :text="item.description" :moreLines="true" />
        </div>
        <BaseButton tag="router-link" link="/projects" size="s">
          <font-awesome-icon :icon="['fas', 'arrow-left-long']" />
          Projects
        </BaseButton>
      </div>
    </div>
    <ProjectTabs :item="item" />
  </div>
</template>

<script>
import ProjectTabs from "@/components/projects/ProjectTabs.vue";
export default {
  name: "ProjectOverview",
  components: { ProjectTabs },
  props: {
    item: { type: Object, default: () => {} },
  },
};
</script>

<style lang="scss">
.project-overview {
  min-height: 100vh;
  padding: 100px 0;
  &__main {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin-bottom: 30px;

    & > div {
      width: 100%;
    }
    &-img {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .project-item {
      max-width: 330px;
    }
    @media only screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      text-align: center;
      .base-heading {
        margin-bottom: 20px !important;
      }
      .base-btn {
        margin: 40px auto;
      }
    }
  }
}
</style>
