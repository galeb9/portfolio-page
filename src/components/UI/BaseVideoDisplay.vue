<template>
  <div v-if="file" class="base-video-display">
    <video :width="width" :height="height" controls>
        <source :src="require('@/assets/video/' + file)" type="video/mp4">
        <!-- <source src="movie.ogg" type="video/ogg"> -->
        Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {
    name: "BaseVideoDisplay",
    props: {
        file: { type: String, default: ""},
        width: { type: Number, default: 320 },
        height: { type: Number, default: 240 },
    }

}
</script>

<style>

</style>