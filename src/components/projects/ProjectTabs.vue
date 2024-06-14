<template>
  <div class="project-tabs" v-if="tabs.length">
    <div class="tabs-header">
      <BaseHeading
        v-for="(tab, index) in tabs"
        :key="index"
        @click="changeTab(tab.title)"
        :class="activeTab === tab.title ? 'tab-active' : ''"
        :text="tab.title"
        :icon="tab.icon"
        element="h4"
      />
    </div>
    <div class="tabs-body glass-bg">
      <VideoPlayer v-if="activeTab == 'Video'" :file="item.video" />
      <ImageGallery
        v-else-if="activeTab == 'Images'"
        :imagePath="item.imagePath"
        :images="item.images"
        :mobileType="item.mobileType"
      />
    </div>
  </div>
</template>

<script>
import ImageGallery from "@/components/projects/ImageGallery.vue";
import VideoPlayer from "@/components/UI/VideoPlayer";

export default {
  components: {
    ImageGallery,
    VideoPlayer,
  },
  props: {
    item: { type: Object, default: () => {} },
  },
  data() {
    return {
      activeTab: "Images",
    };
  },
  computed: {
    tabs() {
      const tabsConfig = [
        { condition: this.item.stats, title: "Stats", icon: "stats" },
        { condition: this.item.images, title: "Images", icon: "image" },
        { condition: this.item.video, title: "Video", icon: "video" },
      ];
      return tabsConfig
        .filter((tab) => tab.condition)
        .map((tab) => ({ title: tab.title, icon: tab.icon }));
    },
  },
  methods: {
    changeTab(component) {
      this.activeTab = component;
    },
  },
};
</script>

<style lang="scss">
.project-tabs {
  .tabs-header {
    display: flex;
    justify-content: end;
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
      background: rgba($color: black, $alpha: 0.54);
      opacity: 1;
    }
  }
  .tabs-body {
    padding: 40px;
    border-radius: $radius;
  }
  @media only screen and (max-width: 768px) {
    .tabs-header {
      display: flex;
      justify-content: center;
      padding-right: 0;
    }
    .tabs-body {
      padding: 30px 10px;
    }
  }
}
</style>
