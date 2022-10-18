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
            justify-content: center;
            gap: 10px;
            margin-bottom: 10px;
            .base-image-gallery__item {
                flex: 1;
                overflow: hidden;
                transition: 0.5s;
                line-height: 0;
                &:hover { flex: 1 1 78%; }
        
                .base-image-gallery__item-img {
                    border-radius: $radius;
                    width: 100%;
                    height: 100%;
                    object-fit: cover; 
                    transition: all .5s;
                    opacity: 0.5;
                }
                &:hover .base-image-gallery__item-img {
                    width: 100%;
                    opacity: 1;
                    // transform: scale(0.95);
                }
            }

        }
    }
</style>