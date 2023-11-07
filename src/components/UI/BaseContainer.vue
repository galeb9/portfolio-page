<template>
  <div
    ref="elementRef"
    class="base-container scroll-element"
    :class="{
      'base-container__horizontal': horizontal,
      'base-container__align-center': alignCenter,
      reveal: revealed,
    }"
    :style="{ margin: marginY + 'px 0', 'min-height': minHeight + 'vh' }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseContainer",
  props: {
    marginY: { type: Number, default: 0 },
    minHeight: { type: Number, default: 90 },
    horizontal: { type: Boolean, default: false },
    alignCenter: { type: Boolean, default: false },
    justifyCenter: { type: Boolean, default: false },
  },
  data() {
    return {
      revealed: false,
    };
  },
  // methods: {
  //   handleScroll() {
  //     const element = this.$refs.elementRef;
  //     if (element) {
  //       const elementTop = element.getBoundingClientRect().top;
  //       const windowHeight = window.innerHeight;
  //       this.revealed = elementTop < windowHeight;
  //     }
  //   },
  // },
  // mounted() {
  //   window.addEventListener("scroll", this.handleScroll);
  // },
  // beforeUnmount() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // },
};
</script>

<style lang="scss">
.base-container {
  padding: 50px 0;
}
.base-container__horizontal {
  display: flex;
}
.base-container__align-center {
  align-items: center;
}
@media only screen and (max-width: 768px) {
  .base-container {
    margin: 0 !important;
    min-height: 99vh !important;
  }
  .base-container__horizontal {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}

/* Style your scroll-revealed element here */
// .scroll-element {
//   opacity: 0;
//   transform: translateY(120px);
//   transition: all 2s, transform 0.2s;
// }
// .scroll-element.reveal {
//   opacity: 1;
//   transform: translateY(0);
// }
</style>
