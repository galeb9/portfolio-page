<template>
    <div class="base-image-gallery__container">
        <div class="base-image-gallery" :style="{ height: bodyHeight + 'px'}">
            <div
                class="base-image-gallery__item"
                v-for="(img, index) in images" 
                :key="index"
            >
                <img 
                    :ref="'galleryImage' + index"
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

        this.logImages()
    },
    methods: {
        logImages () {
            for(let i = 0; i < this.images.length; i++) {
                let refItem = 'galleryImage' + i
                console.log(refItem)
                console.log(this.$refs[refItem])
            }
        },
        setAspectRatio(img, expected) {
            if ( img.naturalWidth === 'undefined' ) return;
            
            // Get natural dimensions of image
            var width = img.naturalWidth;
            var height = img.naturalHeight;
            
            // Examine if width is larger than height then reduce the width but fix the height
            if ( width > height ) {
                img.style.width = (width / height * expected) + 'px';
                img.style.height = expected + 'px';
                
                // horizontally center the image
                img.style.transform = 'translatex(-' + parseInt((width / height * expected) - expected) + 'px)';
                img.style.webkitTransform = 'translateX(-' + parseInt((width / height * expected) - expected) + 'px)';
                return img;
            }
            
            // Examine if height is larger than width then reduce the height but fix the width
            else if ( height > width ) {
                img.style.width = expected + 'px';
                img.style.height = (height / width * expected) + 'px';
                
                // vertically center the image
                img.style.transform = 'translateY(-' + parseInt((height / width * expected) - expected) + 'px)';
                img.style.webkitTransform = 'translateY(-' + parseInt((height / width * expected) - expected) + 'px)';
                return img;
            }
            
            // Or return fix width and height
            else {
                img.style.width = expected + 'px';
                img.style.height = expected + 'px';
            }
        }
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
                    flex: 1 1 16%; 
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