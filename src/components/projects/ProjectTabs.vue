<template>
  <div class="project-tabs" v-if="tabs.length">
    <div class="tabs-header">
      <BaseHeading
        v-for="(tab, index) in tabs"
        :key="index"
        @click="changeTab(tab.title)"
        :class="['base-heading', { 'tab-active': activeTab === tab.title }]"
        :text="tab.title"
        :icon="tab.icon"
        element="h4"
      />
    </div>
    <div class="tabs-body glass-bg">
      <VideoPlayer
        v-if="activeTab === 'Video' && item.video"
        :file="item.video"
      />
      <ImageGallery
        v-else-if="
          activeTab === 'Images' &&
          Array.isArray(item.images) &&
          item.images.length
        "
        :imagePath="item.imagePath"
        :images="item.images"
        :mobileType="item.mobileType"
      />
    </div>
  </div>
</template>

<script>
import ImageGallery from "@/components/projects/ImageGallery.vue";
import VideoPlayer from "@/components/UI/VideoPlayer.vue";

export default {
  components: {
    ImageGallery,
    VideoPlayer,
  },
  props: {
    item: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  data() {
    return {
      activeTab: "Images",
    };
  },
  computed: {
    tabs() {
      return [
        Array.isArray(this.item.images) &&
          this.item.images.length > 0 && {
            title: "Images",
            icon: "image",
          },
        this.item.video && {
          title: "Video",
          icon: "video",
        },
      ].filter(Boolean);
    },
  },
  methods: {
    changeTab(title) {
      this.activeTab = title;
    },
  },
};
</script>

<style lang="scss">
.project-tabs {
  .tabs-header {
    display: flex;
    justify-content: flex-end;
    padding-right: 14px;

    .base-heading {
      padding: 10px 20px;
      cursor: pointer;
      opacity: 0.7;
      transition: $transition;

      &:hover {
        opacity: 1;
        color: $secondary;
        border-radius: $radius $radius 0 0;
      }
    }

    .tab-active {
      border-radius: $radius $radius 0 0;
      color: $lightText;
      border-bottom: 3px solid $secondary;
      background: rgba(0, 0, 0, 0.54);
      opacity: 1;
    }
  }

  .tabs-body {
    padding: 40px;
    border-radius: $radius;
  }

  @media only screen and (max-width: 768px) {
    .tabs-header {
      justify-content: center;
      padding-right: 0;
    }

    .tabs-body {
      padding: 30px 10px;
    }
  }
}
</style>
