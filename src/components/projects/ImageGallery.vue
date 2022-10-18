<template>
  <div class="image-gallery">
        <BaseImageGallery 
            v-for="(images, index) in galleryImages" 
            :key="index"
            :images="images"
            :imagePath="imagePath"
        />
  </div>
</template>

<script>
export default {
    name: "ImageGallery",
    props: {
        images: { type: Array, default: () => [] },
        rowSizeLimit: { type: Number, default: 5},
        imagePath: { type: String, default: "" },
        
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
        console.log(this.imagePath)
    },
    methods: {
        breakIntoRows (items, size) {
            const rows = []
            items = [].concat(...items)
            while (items.length) {
                rows.push(
                items.splice(0, size)
                )
            }
            return rows
        }
    }
}
</script>