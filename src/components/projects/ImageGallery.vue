<template>
  <div class="image-gallery">
    <carousel
      :items-to-show="1"
      breakpoint-mode="carousel"
      :breakpoints="breakpoints"
    >
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
        700: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        1000: {
          itemsToShow: 3,
          snapAlign: "start",
        },
      },
    };
  },
  props: {
    images: { type: Array, default: () => [] },
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
