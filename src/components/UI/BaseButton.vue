<template>
  <component
    :is="tag"
    v-bind="attributes"
    :class="['base-btn', 'base-btn--s-' + size]"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    tag: {
      type: String,
      default: "button",
      validator: (value) => ["a", "button", "router-link"].includes(value),
    },
    to: String,
    link: String,
    size: { type: String, default: "m" }, // s, m, l
  },
  computed: {
    attributes() {
      const options = {
        a: { href: this.link },
        "router-link": { to: this.link },
      };

      return options[this.tag] || {};
    },
  },
};
</script>

<style lang="scss">
.base-btn {
  color: $lightText !important;
  border-radius: $radius;
  box-shadow: $shadow3;
  font-weight: 700;
  padding: 0.7em 2.1em;
  border: none;
  width: max-content;
  transition: $transition 0.15s;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  filter: contrast(100%) brightness(100%);
  background: linear-gradient($secondary, transparent 105%),
    url(https://grainy-gradients.vercel.app/noise.svg);

  &:hover {
    transform: translateY(-5px);
    box-shadow: $shadow2;
  }
  @media only screen and (max-width: 768px) {
    font-size: 16px !important;
  }
}
// sizes
.base-btn--s-s {
  font-size: 14px;
}
.base-btn--s-m {
  font-size: 18px;
}
.base-btn--s-l {
  font-size: 20px;
}
</style>
