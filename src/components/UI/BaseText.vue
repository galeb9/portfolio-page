<template>
  <p :class="['base-text', { 'multiple-lines': moreLines }]">
    <slot>
      {{ text }}
    </slot>
  </p>
</template>

<script>
export default {
  name: "BaseText",
  props: {
    text: { type: String, default: "" },
    moreLines: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss">
.base-text {
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
}
.multiple-lines {
  white-space: pre-line;
}
</style>
