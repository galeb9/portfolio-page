<template>
  <div class="single-project">
    <div class="single-project__main">
      <div class="single-project__main-img">
        <ProjectItem class="floating" :item="item" :hideOnDetail="true" />
      </div>
      <div class="single-project__main-text">
        <div class="mb-20">
          <BaseHeading
            :text="item.title"
            element="h3"
            class="border-bottom"
            margin="10px 0"
          />
          <BaseText :text="item.description" :moreLines="true" />
        </div>
        <SkillsRow
          :skills="item.tech"
          :hasShowLabel="true"
          class="mb-20 mt-40"
        />

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
import ProjectItem from "@/components/projects/ProjectItem.vue";
import ProjectTabs from "@/components/projects/ProjectTabs.vue";
import SkillsRow from "@/components/skills/SkillsRow.vue";

export default {
  name: "SingleProject",
  components: {
    ProjectItem,
    ProjectTabs,
    SkillsRow,
  },
  props: {
    item: { type: Object, default: () => {} },
  },
};
</script>

<style lang="scss">
.single-project {
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
      .project-item__main {
        cursor: default;
      }
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
