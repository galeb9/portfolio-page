<template>
  <BaseContainer>
    <div class="not-found__page">
      <img
        class="not-found__svg"
        :src="require('@/assets/svg/404.svg')"
        alt=""
      />
      <router-link to="/">Go to home page</router-link>
    </div>
  </BaseContainer>
</template>

<script>
import scrollToTop from "@/mixins/scrollToTop";

export default {
  name: "NotFound",
  mixins: [scrollToTop],
};
</script>

<style lang="scss">
.not-found__page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 100vh;
  a {
    border-bottom: 2px solid $secondary !important;
    padding-bottom: 6px;
  }
  .not-found__svg {
    width: 100%;
    text-align: center;
    max-width: 500px;
    margin-bottom: 13px;
  }
}
</style>
