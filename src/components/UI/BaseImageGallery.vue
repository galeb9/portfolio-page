<template>
    <div class="base-image-gallery__container">
        <div class="base-image-gallery">
            <div
                class="base-image-gallery__item"
                v-for="(img, index) in images" 
                :key="index"
            >
                <img 
                    class="base-image-gallery__item-img"
                    :src="require('@/assets/images/' + img)" 
                    alt="Gallery image"
                >
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "BaseImageGallery",
    props: {
        images: { type: Array, default: () => {} }
    }
}
</script>

<style lang="scss">
    .base-image-gallery__container {

        .base-image-gallery {
            height: 50vh;
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
            .base-image-gallery__item {
                flex: 1;
                overflow: hidden;
                transition: 0.5s;
                line-height: 0;
                &:hover { flex: 1 1 50%; }
        
                .base-image-gallery__item-img {
                    border-radius: $radius;
                    width: 100%;
                    height: 100%;
                    object-fit: cover; 
                    transition: .5s;
                }
                &:hover .base-image-gallery__item-img {
                    width: 100%;
                    // height: 100%;
                }
            }

        }
    }
</style>