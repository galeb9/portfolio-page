<template>
  <div class="project-item">
    <div
      class="project-item__main"
      @click="!hideOnDetail ? navigateToProject() : null"
      ref="projectMain"
    >
      <img
        :src="require('@/assets/images/' + item.img)"
        class="project-item__img"
        alt="Project image"
      />
      <div
        v-if="!hideOnDetail"
        class="project-item__main-info glass-bg expanding-div"
      >
        <BaseHeading element="h3" :text="item.title" margin="10px 0" />
        <BaseText class="hidden-text" :text="item.text" />
      </div>
    </div>

    <div v-if="item.tech.length" class="project-item__tech glass-bg">
      <p
        class="project-item__tech-item"
        v-for="(el, index) in item.tech"
        :key="index"
      >
        {{ "#" + el }}
      </p>
    </div>

    <div v-if="linksVisible" class="project-item__links-container glass-bg">
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
        ref="openPopup"
      >
        View more
        <font-awesome-icon
          class="project-link__icon"
          :icon="['fa', 'arrow-right-long']"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectItem",
  props: {
    item: { type: Object, default: () => {} },
    hideOnDetail: { type: Boolean, default: false },
  },
  computed: {
    linksVisible() {
      return this.item.github || this.item.liveAt || this.item.description;
    },
  },
  methods: {
    navigateToProject() {
      this.$router.push(`/projects/${this.item.id}`);
    },
  },
};
</script>

<style lang="scss">
.project-item {
  max-width: 270px;
  &:hover .view-more {
    color: $secondary !important;
  }

  .project-item__main {
    position: relative;
    margin-bottom: 8px;
    transition: $transition;
    cursor: pointer;

    .project-item__img {
      width: 100%;
      border-radius: $radius;
    }
    .project-item__main-info {
      border-radius: 0 0 $radius $radius;
      width: 100%;
      position: absolute;
      bottom: -10px;
      left: 0;
      right: 0;
      padding: 10px 20px;
      color: white;
    }
    .expanding-div {
      height: 100px;
      overflow: hidden;
      transition: height 0.3s ease-in-out; /* Add a smooth height transition */
    }

    .expanding-div:hover {
      height: 180px; /* Expand the div on hover */
    }

    .hidden-text {
      display: none; /* Initially hide the text */
      padding-bottom: 10px;
    }

    .expanding-div:hover .hidden-text {
      display: block; /* Show the text when the parent div is hovered */
    }
  }

  .project-item__tech {
    padding: 10px 20px;
    border-radius: $radius $radius;
    font-size: 14px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    .project-item__tech-item {
      opacity: 0.7;
      transition: $transition;
      &:hover {
        opacity: 1;
      }
    }
  }

  .project-item__links-container {
    padding: 10px 20px;
    border-radius: $radius $radius;
    display: flex;
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

    .project-item__links-item {
      cursor: pointer;
      .project-link__icon {
        font-size: 20px;
        transition: $transition;
        &:hover {
          color: $secondary;
        }
      }
    }
    .project-item__links-item + .project-item__links-item {
      margin-left: 16px;
    }
  }
  .view-more__color {
    color: $secondary !important;
  }
  @media only screen and (max-width: 768px) {
    max-width: 350px;
    min-width: 220px;
  }
}
</style>
