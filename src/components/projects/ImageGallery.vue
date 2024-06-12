<template>
  <div class="image-gallery">
    <ImageGalleryRow
      v-for="(images, index) in galleryImages"
      :key="index"
      :images="images"
      :imagePath="imagePath"
      :isSingle="singleInRow(images)"
    />
  </div>
</template>

<script>
import ImageGalleryRow from "./ImageGalleryRow.vue";
export default {
  name: "ImageGallery",
  components: {
    ImageGalleryRow,
  },
  props: {
    images: { type: Array, default: () => [] },
    rowSizeLimit: { type: Number, default: 5 },
    imagePath: { type: String, default: "" },
  },
  data() {
    return {
      incomingData: null,
      galleryImages: null,
      isSingle: null,
    };
  },
  created() {
    this.incomingData = [...this.images];
    this.galleryImages = this.breakIntoRows(
      this.incomingData,
      this.rowSizeLimit
    );
  },
  methods: {
    breakIntoRows(items, size) {
      const rows = [];
      items = [].concat(...items);
      while (items.length) {
        rows.push(items.splice(0, size));
      }
      return rows;
    },
    singleInRow(images) {
      return images.length === 1 ? true : false;
    },
  },
};
</script>
