<template>
    <div class="base-image-gallery__container">
        <div class="base-image-gallery" :style="{ height: bodyHeight + 'px'}">
            <div
                class="base-image-gallery__item"
                v-for="(img, index) in images" 
                :key="index"
            >
                <img 
                    :class="['base-image-gallery__item-img', { 'img--single': isSingle }]"
                    :src="require('@/assets/images/' + imagePath + img)" 
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
        images: { type: Array, default: () => {} },
        imagePath: { type: String, default: "" },
        isSingle: { type: Boolean, default: false }
    },
    data() {
        return {
            bodyHeight: null,
        }
    },
    mounted () {
        this.bodyHeight= document.querySelector(".base-popup__body").offsetHeight - 50
    }
}
</script>

<style lang="scss">
    .base-image-gallery__container {

        .base-image-gallery {
            height: 100%;
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-bottom: 10px;
            // height: 500px;
            .base-image-gallery__item {
                flex: 1;
                overflow: hidden;
                transition: 0.5s;
                line-height: 0;
                &:hover { 
                    flex: 1 1 25%; 
                    @media only screen and (max-width: 768px) {
                        flex: 1 1 80%;
                    }
                }
                &:hover .base-image-gallery__item-img {
                    width: 100%;
                    height: 100%;
                    opacity: 1;
                }
                &:hover .img--single {
                    width: auto;
                }

                .base-image-gallery__item-img {
                    border-radius: $radius;
                    width: 100%;
                    height: 100%;
                    object-fit: cover; 
                    transition: all .5s;
                    opacity: 0.7;
                }
                .img--single {
                    width: auto;
                    height: 100%;
                    opacity: 1;
                }
            }
        }
    }
</style>