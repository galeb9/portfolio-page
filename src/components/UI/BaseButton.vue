<template>
  <button :class="['base-button', 'base-btn--' + type, 'base-btn--' + aligment]">{{ text }}</button>
</template>

<script>
export default {
    name: "BaseButton",
    props: {
        text: { type: String, default: "btn text"},
        type: { type: String, default: "" },
        aligment: { type: String, default: "" },
    }

}
</script>

<style lang="scss">
  .base-button {
    background: $primary;
    color: $lightText;
    padding: 0.7em 2.1em;
    border: none;
    border-radius: $radius;
    width: max-content;
    cursor: pointer;
  }
  // types
  .base-btn--dark {
    background: rgba($color: $secondary, $alpha: 0.7)
  }
  // aligment 
  .base-btn--center {
    // display: flex;
    // justify-content: center;
  }

</style>