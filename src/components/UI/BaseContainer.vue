<template>
  <div class="base-container">
    <div>
      <BaseHeading v-if="title" element="h2" :text="title" :center="true" />
      <div class="base-container__body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseContainer",
  props: {
    title: { type: String, default: "" },
  },
};
</script>

<style lang="scss">
.base-container {
  // background: red;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 95vh;
  & > div > .base-heading {
    margin-bottom: 80px !important;
  }
  // &__body {
  // background: blue;
  // }
  @media only screen and (max-width: 768px) {
    padding: 50px 0;
    margin: 0 !important;
    // display: block;
    // min-height: 99vh !important;
    .base-heading {
      margin-bottom: 50px !important;
    }
  }
  & + .base-container {
    // background: red;
    padding-bottom: 50px;
  }
}
</style>
