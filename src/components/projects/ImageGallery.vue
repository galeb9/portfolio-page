<template>
  <div class="image-gallery">
        <BaseImageGallery 
            v-for="(images, index) in galleryImages" 
            :key="index"
            :images="images"
        />
  </div>
</template>

<script>
export default {
    name: "ImageGallery",
    props: {
        images: { type: Array, default: () => [] },
        rowSizeLimit: { type: Number, default: 4}
    },
    data () {
        return {
            incomingData: null,
            galleryImages: null
        }
    },
    created () {
        this.incomingData = [...this.images]
        this.galleryImages = this.breakIntoRows(this.incomingData, this.rowSizeLimit)
    },
    methods: {
        breakIntoRows (items, size) {
            const chunks = []
            items = [].concat(...items)
            while (items.length) {
                chunks.push(
                items.splice(0, size)
                )
            }
            return chunks
        }
    }
    
}
</script>

<style lang="scss">
    .image-gallery {

    }
</style>