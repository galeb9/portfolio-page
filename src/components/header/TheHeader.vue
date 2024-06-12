<template>
  <div class="header">
    <TheNavigation />
  </div>
</template>

<script>
import TheNavigation from "@/components/header/TheNavigation.vue";

export default {
  name: "TheHeader",
  components: {
    TheNavigation,
  },
};
</script>

<style lang="scss">
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(6px);
}
</style>
