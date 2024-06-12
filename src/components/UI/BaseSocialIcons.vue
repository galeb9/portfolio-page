<template>
  <div :class="['social-icons', { 'social-icons--only': !iconsOnly }]">
    <a
      v-for="(link, index) in links"
      :key="index"
      :href="link.link"
      target="_blank"
      class="social-icon__link"
    >
      <font-awesome-icon
        class="social-icon"
        :icon="[link.icon.prefix, link.icon.name]"
      />
      <BaseText v-if="!iconsOnly" :text="link.text" />
    </a>
  </div>
</template>

<script>
import BaseText from "@/components/UI/BaseText.vue";

export default {
  name: "BaseSocialIcons",
  components: { BaseText },
  props: {
    links: { type: Array, default: () => [] },
    iconsOnly: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss">
.social-icons {
  display: flex;
  align-items: center;
  gap: 20px;
  .social-icon__link {
    display: flex;
    align-items: center;
    gap: 8px;
    transition: $transition 0.2s;
    border-bottom: 2px solid transparent;
    padding-bottom: 5px;
    .social-icon {
      transition: transform 0.4s ease-in-out 0.2s;
      font-size: 20px;
      color: $secondary;
    }
    .base-text {
      transition: transform 0.4s ease-in-out 0.2s;
      white-space: normal !important;
      font-size: 14px;
    }
    &:hover {
      border-bottom-color: $secondary;
      .social-icon {
        transform: translateY(-4px) rotate(360deg);
      }
      .base-text {
        transform: translateY(-4px);
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .social-icons {
    gap: 30px;
    .social-icon__link {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      .social-icon {
        font-size: 20px;
      }
    }
  }
  .social-icons--only {
    flex-direction: column;
  }
}
</style>
