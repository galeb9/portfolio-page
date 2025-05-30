<template>
  <div class="project-item">
    <div
      class="project-item__main"
      :class="{ 'is-clickable': !hideOnDetail }"
      @click="handleClick"
    >
      <img
        v-if="item.img"
        :src="require('@/assets/images/' + item.img)"
        class="project-item__img"
        alt="Project image"
      />
      <div v-if="!hideOnDetail" class="project-item__main-info glass-bg">
        <BaseHeading element="h3" :text="item.title" margin="10px 0" />
        <BaseText class="hidden-text" :text="item.text" />
      </div>
    </div>

    <div v-if="item.tech?.length" class="project-item__tech glass-bg">
      <p v-for="tech in item.tech" :key="tech" class="project-item__tech-item">
        {{ "#" + tech }}
      </p>
    </div>

    <div v-if="hasLinks" class="project-item__links-container glass-bg">
      <div class="project-item__links">
        <a
          v-if="item.github"
          :href="item.github"
          target="_blank"
          class="project-item__links-item"
        >
          <font-awesome-icon
            class="project-link__icon"
            :icon="['fab', 'github']"
          />
        </a>
        <a
          v-if="item.liveAt"
          :href="item.liveAt"
          target="_blank"
          class="project-item__links-item"
        >
          <font-awesome-icon class="project-link__icon" :icon="['fa', 'eye']" />
        </a>
      </div>

      <router-link
        v-if="item.description && !hideOnDetail"
        :to="`/projects/${item.id}`"
        class="view-more project-item__links-item open-popup__btn"
      >
        View more
        <font-awesome-icon
          :icon="['fa', 'arrow-right-long']"
          class="project-link__icon"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectItem",
  props: {
    item: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    hideOnDetail: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    hasLinks() {
      return Boolean(this.item.github || this.item.liveAt);
    },
  },
  methods: {
    handleClick() {
      if (!this.hideOnDetail) {
        this.$router.push(`/projects/${this.item.id}`);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.project-item {
  max-width: 270px;

  &:hover .view-more {
    color: $secondary !important;
  }

  &__main {
    position: relative;
    margin-bottom: 8px;
    transition: $transition;

    &.is-clickable {
      cursor: pointer;
    }

    .project-item__img {
      width: 100%;
      border-radius: $radius;
    }

    &-info {
      position: absolute;
      bottom: -10px;
      left: 0;
      right: 0;
      padding: 10px 20px;
      width: 100%;
      height: 100px;
      color: $lightText;
      border-radius: 0 0 $radius $radius;
      transition: $transition;

      .hidden-text {
        display: none;
        height: 0;
        opacity: 0;
        transition: $transition;
      }

      &:hover {
        height: 100%;
        .hidden-text {
          display: block;
          height: max-content;
          opacity: 1;
        }
      }
    }
  }

  &__tech {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 10px 20px;
    font-size: 14px;
    border-radius: $radius;

    &-item {
      opacity: 0.7;
      transition: $transition;

      &:hover {
        opacity: 1;
      }
    }
  }

  &__links-container {
    display: flex;
    padding: 10px 20px;
    border-radius: $radius;

    .project-item__links-item {
      cursor: pointer;

      .project-link__icon {
        font-size: 20px;
        transition: $transition;

        &:hover {
          color: $secondary;
        }
      }

      & + .project-item__links-item {
        margin-left: 16px;
      }
    }

    .view-more {
      margin-left: auto;
      display: flex;
      gap: 8px;
      transition: $transition;

      &:hover {
        color: $secondary;

        .project-link__icon {
          color: $secondary;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    max-width: 350px;
    min-width: 220px;
  }
}
</style>
