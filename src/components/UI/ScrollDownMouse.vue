<template>
  <a class="scroll-down-mouse" href="#skills">
    <font-awesome-icon class="social-icon" :icon="['fas', 'computer-mouse']" />
    <BaseText text="Scroll down" />
  </a>
</template>

<script>
export default {};
</script>

<style lang="scss">
.scroll-down-mouse {
  display: flex;
  justify-content: center;
  color: $secondary !important;
  gap: 10px;
  transform: translateY(160px);
  opacity: 0.8;
  transition: $transition;
  &:hover {
    opacity: 1;
    border-bottom-color: $secondary !important;
    transform: translateY(150px);
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
}
</style>
