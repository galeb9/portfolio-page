<template>
  <div class="image-gallery">
    <carousel :items-to-show="1" :breakpoints="breakpoints">
      <slide v-for="(img, index) in images" :key="index">
        <img
          :src="require('@/assets/images/' + imagePath + img)"
          :style="{ 'max-width': mobileType ? '250px' : '600px' }"
          class="image-gallery__img"
          alt="Project image"
        />
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script>
// https://github.com/ismail9k/vue3-carousel
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "ImageGallery",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: this.images.length >= 3 ? 3 : 1,
          snapAlign: "center",
        },
      },
    };
  },
  props: {
    images: { type: Array, default: () => {} },
    imagePath: { type: String, default: "" },
    mobileType: { type: Boolean, default: true }, // desktop -> false
  },
};
</script>

<style lang="scss">
.image-gallery {
  &__img {
    border-radius: $radius;
    @media only screen and (max-width: 768px) {
      max-width: 90% !important;
    }
  }

  // carousel config
  .carousel__pagination {
    margin: 40px 0;
  }
  .carousel__icon {
    background: $secondary;
    border-radius: $radius;
    color: $lightText;
  }
  .carousel__pagination-button--active::after {
    background: $secondary;
  }
}
</style>
