<template>
  <button class="base-button">{{ text }}</button>
</template>

<script>
export default {
    name: "BaseButton",
    props: {
        text: { type: String, default: "btn text"}
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
  }
</style>