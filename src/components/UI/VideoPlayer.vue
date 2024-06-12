<template>
  <div v-if="file" class="video-player">
    <video class="video-player__video" controls>
      <source
        ref="baseVideo"
        :src="require('@/assets/video/' + file)"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {
  name: "VideoPlayer",
  props: {
    file: { type: String, default: "" },
    maxWidth: { type: String, default: "" },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.video-player {
  min-height: 200px;
  display: flex;
  justify-content: center;
  &__video {
    max-width: 300px;
    border-radius: $radius;
  }
}
</style>
