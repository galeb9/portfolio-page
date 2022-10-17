<template>
  <div class="project-overview">
    <BaseHTMLtext :text="item.description" />

    <div class="project-overview__video-container">
        <BaseHeading icon="video" element="h4" margin="10px 0" text="Video of the app: " />
        <BaseVideoDisplay :file="item.video" />
    </div>
        <div class="project-overview__video-container">
        <BaseHeading icon="video" element="h4" margin="10px 0" text="Video of the app: " />
        <BaseVideoDisplay :file="item.video" />
    </div>    <div class="project-overview__video-container">
        <BaseHeading icon="video" element="h4" margin="10px 0" text="Video of the app: " />
        <BaseVideoDisplay :file="item.video" />
    </div>    <div class="project-overview__video-container">
        <BaseHeading icon="video" element="h4" margin="10px 0" text="Video of the app: " />
        <BaseVideoDisplay :file="item.video" />
    </div>    <div class="project-overview__video-container">
        <BaseHeading icon="video" element="h4" margin="10px 0" text="Video of the app: " />
        <BaseVideoDisplay :file="item.video" />
    </div>    <div class="project-overview__video-container">
        <BaseHeading icon="video" element="h4" margin="10px 0" text="Video of the app: " />
        <BaseVideoDisplay :file="item.video" />
    </div>

    <div class="project-overview__images-gallery"></div>

    <!-- <p>{{ item }} </p> -->
  </div>
</template>

<script>
export default {
    name: "ProjectOverview",
    props: {
        item :{ type: Object, default: () => {} }
    }
    

}
</script>

<style lang="scss">
    .project-overview {

        .project-overview__video-container {

        }
        .project-overview__images-gallery {

        }
    }
</style>