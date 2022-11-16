<template>
  <div class="project-overview">
    <BaseHTMLtext :text="item.description" />

    <div v-if="item.video" class="project-overview__video-container">
        <BaseHeading icon="video" element="h4" margin="10px 0 15px" text="Video of the app" :center="true" />
        <BaseVideoDisplay :file="item.video" maxWidth="0" />
    </div>

    <div v-if="item.images" class="project-overview__images-gallery">
        <BaseHeading icon="image" element="h4" margin="10px 0 15px" text="Images of the app" :center="true" />
        <ImageGallery 
            :imagePath="item.imagePath" 
            :images="item.images" 
            :rowSizeLimit="item.imagesPerRow" 
        />
    </div>
  </div>
</template>

<script>
import ImageGallery  from "./ImageGallery.vue"

export default {
    name: "ProjectOverview",
    components: {
        ImageGallery 
    },
    props: {
        item :{ type: Object, default: () => {} }
    }
}
</script>

<style lang="scss">
    .project-overview {

        .project-overview__video-container,
        .project-overview__images-gallery {
            margin-top: 60px;
        }
        .project-overview__images-gallery {
        }
    }

</style>