<template>
  <div class="project-overview">
    <div class="project-overview__main">
      <div class="project-overview__main-img">
        <slot></slot>
      </div>
      <div class="project-overview__main-text">
        <div>
          <BaseHeading
            :text="item.title"
            element="h3"
            class="border-bottom"
            margin="10px 0"
          />
          <BaseHTMLtext :text="item.description" />
        </div>

        <BaseButton tag="router-link" link="/projects" size="s">
          Projects
          <font-awesome-icon :icon="['fas', 'arrow-right-long']" />
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
      flex-direction: column-reverse;
      justify-content: center;
      text-align: center;
      .base-heading {
        margin-bottom: 20px !important;
      }
    }
  }

  &__video-container,
  &__images-gallery {
    margin-top: 60px;
  }
}
</style>
